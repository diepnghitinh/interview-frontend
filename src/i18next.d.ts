// import the original type declarations
import 'i18next'
// import all namespaces (for the default language, only)
import common from '../public/locales/en/common.json'
import farm from '../public/locales/en/farm.json'

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'common'
    // custom resources type
    resources: {
      common: typeof common
      farm: typeof farm
    }
    // other
  }
}
