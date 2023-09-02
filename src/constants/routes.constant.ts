import {
  checkFarmViewPermission,
} from '@/utils/function/checkGroup'

export const prefix_link = '/projects'

export const APP_ROUTES = {
  //Menu level 1
  HOME: "/",
}

export const APP_ROUTES_PERMISSION = {
  [APP_ROUTES.HOME]: checkFarmViewPermission,
  getDefault: (scopes: string | string[] | any) => {
    // scopes == undentify => 403
    return (
      scopes.indexOf('is_admin') > -1 || scopes.indexOf('is_super_admin') > -1
    )
  },
}
