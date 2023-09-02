import { QueryClient } from 'react-query'
import loginService, { getTenants } from '@/services/login'
import authQueries, {
  USER_SIGN_IN,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_OUT,
  SET_USER_SIGN_OUT_SUCCESS,
  SET_LOGIN_ERROR,
  SET_USER_TENANT,
} from './authQueries'
import { parseResponseData, removeToken, setToken } from '@/utils'

export default function (queryClient: QueryClient) {
  queryClient.setMutationDefaults(USER_SIGN_OUT, {
    mutationFn: async (_variables) => {
      removeToken()
      queryClient.setQueryData(
        SET_USER_SIGN_OUT_SUCCESS,
        _variables.action == USER_SIGN_OUT
          ? 'Đăng xuất thành công'
          : 'Phiên người dùng đã hết hạn'
      )
    },
  })
  queryClient.setMutationDefaults(USER_SIGN_IN, {
    mutationFn: async (variables) => {
      // Check tenant
      if (!variables.client_id) {
        const tenants = await getTenants(variables.username)
        if (typeof tenants != 'string' && tenants?.results.length > 0) {
          queryClient.setQueryData(SET_USER_TENANT, {
            tenants: tenants.results,
            formData: variables,
          })
        } else {
          queryClient.setQueryData(SET_LOGIN_ERROR, tenants)
        }
        return
      }

      const signInUser = await loginService(variables)

      if (signInUser?.response?.status == 401) {
        queryClient.setQueryData(
          SET_LOGIN_ERROR,
          'Sai tên đăng nhập hoặc mật khẩu'
        )
      } else {
        const responseData = parseResponseData(signInUser?.data)
        queryClient.setQueryData(SET_LOGIN_ERROR, '')

        setToken(responseData)
        window.history.pushState('/', 'auth-login', '/')
        window.location.reload()
      }
    },
  })
  return queryClient
}
