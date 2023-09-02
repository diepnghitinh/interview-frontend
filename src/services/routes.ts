import { objectToQueryString } from "@/utils/queryString";
import { compile } from "path-to-regexp";

const API_URL = import.meta.env.VITE_REST_API;

export const ROUTE_NAME = {
  AUTH: {
    REFRESH_TOKEN: "auth.refresh.token",
    AUTH_TOKEN: "auth.login.token",
    PROFILE: "auth.get.profile",
    GET_TENANT: "auth.get.tenant",
    CHANGE_PASSWORD: "auth.change.password",
    UPLOAD_AVATAR: "_put.oauth.avatar",
  },
};

const routes_config = {
  [ROUTE_NAME.AUTH.AUTH_TOKEN]: "/oauth/token",
  [ROUTE_NAME.AUTH.REFRESH_TOKEN]: "/oauth/refresh",
  [ROUTE_NAME.AUTH.PROFILE]: "/identity-service/oauth/profile",
  [ROUTE_NAME.AUTH.GET_TENANT]: "/public/user/tenants",
  [ROUTE_NAME.AUTH.CHANGE_PASSWORD]: "/identity-service/oauth/change-password",
  [ROUTE_NAME.AUTH.UPLOAD_AVATAR]: "/identity-service/oauth/avatar",
};

export const routeTo = (name: string, params = {}, url_params?: string) =>
  API_URL +
  compile(routes_config[name])(url_params as any) +
  objectToQueryString(params);

export const routeToEndpoint = (endpoint: string, params = {}) =>
  endpoint + objectToQueryString(params);
