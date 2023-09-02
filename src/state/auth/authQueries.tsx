import { useQuery } from 'react-query'

export const USER_SIGN_IN = 'USER_SIGNIN'
export const USER_SIGN_OUT = 'USER_SIGNOUT'
export const USER_TOKEN_EXPIRED = 'USER_TOKEN_EXPIRED'
export const USER_SIGN_IN_SUCCESS = 'USER_SIGN_IN_SUCCESS'
export const USER_TENANT = 'USER_TENANT'

export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR'
export const SET_USER_TENANT = 'SET_USER_TENANT'
export const SET_USER_SIGN_OUT_SUCCESS = 'SET_USER_SIGN_OUT_SUCCESS'

export default {
  SET_USER_TENANT: () => {
    return useQuery(SET_USER_TENANT, {
      initialData: '',
      refetchOnWindowFocus: false,
      onSuccess: (data: any) => {
        return data
      },
    })
  },
  SET_LOGIN_ERROR: () => {
    return useQuery(
      SET_LOGIN_ERROR,
      () => {
        return ''
      },
      {
        initialData: '',
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
          return data
        },
      }
    )
  },
  SET_USER_SIGN_OUT_SUCCESS: () => {
    return useQuery(
      SET_USER_SIGN_OUT_SUCCESS,
      () => {
        return ''
      },
      {
        initialData: '',
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
          return data
        },
      }
    )
  },
}
