import { ROUTE_NAME, routeTo } from './routes'
import axiosInstance from './axiosApi'
import generalApi from '@/services/generalApi'
import axios from 'axios'

export const getTenants = async (private_email: string) => {
  return await generalApi
    .create_json({
      data: {
        private_email: private_email,
        client_alias: 'application_web',
      },
      routeName: ROUTE_NAME.AUTH.GET_TENANT,
    })
    .then((response) => {
      return response.data?.data ?? response.data?.message
    })
    .catch((error) => {
      return error
    })
}

const loginService = async (params: any) => {
  const { username, password, client_id } = params
  return await axios
    .create()
    .post(
      routeTo(ROUTE_NAME.AUTH.AUTH_TOKEN),
      { username, password },
      {
        headers: {
          grant_type: 'password',
          client_id: client_id,
        },
      }
    )
    .then((response) => {
      return response
    })
    .catch((error) => error)
}

export default loginService
