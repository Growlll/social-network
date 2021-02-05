export const updateObjectInArray = (users, userId, objPropName, newObjProps) => {
  return users.map(e => {
    if (e[objPropName] === userId) {
      return {...e, ...newObjProps}
    }
    return e
  })
}