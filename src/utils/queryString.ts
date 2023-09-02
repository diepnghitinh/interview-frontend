import { useLocation } from 'react-router-dom'
import URLSearchParams from 'url-search-params'

export const objectToQueryString = (parameter: any) => {
  const str = []
  for (const p in parameter) {
    if (parameter.hasOwnProperty(p)) {
      const value = parameter[p]
      const encodedKey = encodeURIComponent(p)
      const encodedValue = encodeURIComponent(value)
      const queryString = Array.isArray(value)
        ? value
            .map((item) => `${encodedKey}=${encodeURIComponent(item)}`)
            .join('&')
        : `${encodedKey}=${encodedValue}`
      if (value !== null && value !== undefined) {
        str.push(queryString)
      }
    }
  }
  return '?' + str.join('&')
}