import useDeepCompareEffect from '@/hooks/useDeepCompareEffect'
import Content from '@/layouts/content/Content'
import authQueries, {
  USER_SIGN_OUT,
  USER_TOKEN_EXPIRED,
} from '@/state/auth/authQueries'
import { getToken } from '@/utils/tokenData'
import React, { useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Id, toast } from 'react-toastify'

const ErrorFallback: React.FC<any> = ({ error, resetErrorBoundary }) => {
  return (
    <Content>
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </Content>
  )
}

const ErrorBoundaryComponent: React.FC<any> = ({ children }) => {
  const navigate = useNavigate()
  const [explode, setExplode] = React.useState(false)
  const m_login_signout = useMutation(USER_SIGN_OUT)
  const q_login_signout = authQueries.SET_USER_SIGN_OUT_SUCCESS()

  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine)

  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine)
    }

    // Listen to the online status
    window.addEventListener('online', handleStatusChange)

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange)

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange)
      window.removeEventListener('offline', handleStatusChange)
    }
  }, [isOnline])

  // Network
  let notifyNetwork: Id | undefined

  useDeepCompareEffect(() => {
    if (q_login_signout.isSuccess && q_login_signout.data != '') {
      toast.warning(q_login_signout.data)
      navigate('/auth-login')
    }
  }, [q_login_signout])

  useDeepCompareEffect(() => {
    if (!isOnline) {
      notifyNetwork = toast('☁️ Mất kết nối mạng', {
        position: 'bottom-left',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      })
    } else {
      toast.dismiss(notifyNetwork)
    }
  }, [isOnline])

  const myErrorHandler = (error: any, info: any) => {
    console.error('error: ', error)
    console.info('info: ', info)
    // reload with new build bundle
    if (
      error.message.includes('Failed to fetch dynamically imported module') ||
      error.message.includes('Importing a module script failed')
    ) {
      window.location.replace(window.location.href)
    }

    // Do something with the error
    // E.g. log to an error logging client here
    if (!getToken()) {
      m_login_signout.mutate({
        action: USER_TOKEN_EXPIRED,
      } as any)
    }
  }

  return (
    <ErrorBoundary
      onReset={() => setExplode(false)}
      resetKeys={[explode]}
      onError={myErrorHandler}
      FallbackComponent={ErrorFallback}
    >
      {explode ? null : children}
    </ErrorBoundary>
  )
}

export default ErrorBoundaryComponent
