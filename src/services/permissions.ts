import generalApi from './generalApi'
import { ROUTE_NAME, routeTo } from '@/services/routes'
import jwt_decode from 'jwt-decode'
import { getToken } from '@/utils'

export const getCurrentPermission = (accessToken: string) => {
  const decoded = jwt_decode(accessToken) as any
  return [
    ...(decoded.scopes != '' ? decoded.scopes!.split(',') : []),
    ...(decoded.is_admin ? ['is_admin'] : ''),
    ...(decoded.is_super_admin ? ['is_super_admin'] : ''),
  ]
}
