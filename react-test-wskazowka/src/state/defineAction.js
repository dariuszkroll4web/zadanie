const defineAction =
  (type, ...argNames) =>
  (...args) => {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }

export default defineAction
