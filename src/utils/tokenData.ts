const TOKEN_KEY = 'cu-access-token'

export const getToken = () => {
  let token
  const userToken = localStorage.getItem(TOKEN_KEY)
  if (userToken) token = JSON.parse(userToken || '')

  return token
}

export const setToken = (data: any) => {
  const token = localStorage.getItem(TOKEN_KEY)
  let oldToken
  if (token) oldToken = JSON.parse(token || '')
  const userToken = { ...oldToken, ...data }
  localStorage.setItem(TOKEN_KEY, JSON.stringify(userToken))
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}
