import { createContext } from 'react'
import { UseQueryResult } from 'react-query'

export const UserSessionContext = createContext<
  UseQueryResult<any> | undefined
>(undefined)
