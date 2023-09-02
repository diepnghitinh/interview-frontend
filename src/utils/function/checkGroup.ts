import { PERMISSION_DICT } from '@/constants/user'

const checkGroup = (
  groupsCheck: (string | string[])[],
  groupsCurrent: any[]
) => {
  let checkAnd = false

  if (groupsCurrent.indexOf(PERMISSION_DICT.ADMIN_SUPER) > -1) return true

  groupsCheck.map((v) => {
    if (typeof v == 'object') {
      // Or
      let checkOrSub = true
      v.map((vv) => {
        checkOrSub = checkOrSub && groupsCurrent.indexOf(vv) > -1
        //checkOr = checkOr && checkOrSub
      })
      checkAnd = checkAnd || checkOrSub
    } else {
      // And
      checkAnd = checkAnd || groupsCurrent.indexOf(v) > -1
    }
  })
  return checkAnd
}

// Admin or farm_view
// FARM_VIEW OR FARM_EDIT OR (ADMIN AND FARM_VIEW)
export const checkFarmViewPermission = (groupsCurrent: any) => {
  const groupCheckList = [
    PERMISSION_DICT.ADMIN,
  ]
  return checkGroup(groupCheckList, groupsCurrent)
}