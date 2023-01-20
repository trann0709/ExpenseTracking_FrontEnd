import {
  ADD_EXPENSE,
  CLEAR_FORM,
  DATE_CHANGE,
  HANDLE_CHANGE,
  TOGGLE_SIDEBAR,
} from '../actions'

const expense_reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen }
  }

  if (action.type === HANDLE_CHANGE) {
    const { name, value } = action.payload
    return { ...state, [name]: value }
  }

  if (action.type === DATE_CHANGE) {
    return { ...state, date: action.payload }
  }

  if (action.type === CLEAR_FORM) {
    return { ...action.payload, isSidebarOpen: state.isSidebarOpen }
  }
  if (action.type === ADD_EXPENSE) {
    return
  }
  throw new Error(`No matching "${action.type}" - action type`)
}

export default expense_reducer
