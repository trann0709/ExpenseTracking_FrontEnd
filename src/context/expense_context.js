import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/expense_reducer'
import { TOGGLE_SIDEBAR } from '../actions'

const initialState = {
  isSidebarOpen: false,
  isLoading: false,
  category: '',
  paymentType: '',
  isEditing: false,
}

const ExpenseContext = React.createContext()

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  return (
    <ExpenseContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export const useExpenseContext = () => {
  return useContext(ExpenseContext)
}
