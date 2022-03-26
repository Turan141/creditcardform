export const activeValueReducer = (action: any, state: object) => {
  switch (action.type) {
    case 'id':
      return { ...state, id: true }
    case 'month':
      return { ...state, month: true }
    case 'cvv':
      return { ...state, cvv: true }
    case 'amount':
      return { ...state, amount: true }
    default:
      return state
  }
}
