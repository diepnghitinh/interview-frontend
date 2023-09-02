import { getToken } from '@/utils/tokenData'
import { useQuery } from 'react-query'
import { getCurrentPermission } from '@/services/permissions'

export const SESSION_DATA = 'sessionData'

export default {
  SESSION_DATA: () => {
    const token = getToken()
    return useQuery(
      SESSION_DATA,
      () => {
        return {
          loggedIn: token ? true : false,
          compact: true,
          scopes: getCurrentPermission(token.access_token),
        }
      },
      {
        enabled: !!token,
        staleTime: Infinity,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      }
    )
  },
}
