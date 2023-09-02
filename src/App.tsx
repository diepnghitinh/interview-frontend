import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { UserSessionContext } from './contexts/UserSessionContext'
import sessionQueries from './state/session/sessionQueries'

// Components
import LazyComponent from './components/LazyLoad/LazyComponent'
import Error404Classic from './pages/error/Error404Classic'
import PrivateRoute from './routes/PrivateRoute'

const Login = React.lazy(() => import('@/pages/auth'))

export default function App() {
  const user = sessionQueries.SESSION_DATA()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path={`/auth-login`}
          element={
            <LazyComponent>
              <Login />
            </LazyComponent>
          }
        />
        <Route
          path={`/errors/404-classic`}
          element={
            <LazyComponent>
              <Error404Classic />
            </LazyComponent>
          }
        />
        <Route
          path="/*"
          element={
            <LazyComponent>
              <PrivateRoute />
            </LazyComponent>
          }
        />
      </Route>
    ),
    {
      basename: '/',
    }
  )
  return (
    <React.StrictMode>
      <UserSessionContext.Provider
        value={user.status === 'success' ? user : undefined}
      >
          <RouterProvider router={router} />
      </UserSessionContext.Provider>
      <ToastContainer autoClose={1000}/>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </React.StrictMode>
  )
}
