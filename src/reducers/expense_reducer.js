import { HANDLE_CHANGE, TOGGLE_SIDEBAR } from '../actions'

const expense_reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen }
  }

  if (action.type === HANDLE_CHANGE) {
    const { name, value } = action.payload
    return { ...state, [name]: value }
  }

  throw new Error(`No matching "${action.type}" - action type`)
}

export default expense_reducer
