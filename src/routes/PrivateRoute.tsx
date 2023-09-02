import { Navigate } from 'react-router-dom'
import RouteComponent from './Index'
import sessionQueries from '@/state/session/sessionQueries'

const PrivateRoute = () => {
  const user = sessionQueries.SESSION_DATA()

  return (
    <>
      {user.isSuccess && user?.data?.loggedIn && <RouteComponent />}
      {(user.isError || (!user.isFetching && !user.data?.loggedIn)) && (
        <Navigate to={`/auth-login`} />
      )}
    </>
  )
}

export default PrivateRoute
