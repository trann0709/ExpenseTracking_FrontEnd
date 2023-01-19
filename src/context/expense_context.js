import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/expense_reducer'
import { ADD_EXPENSE, TOGGLE_SIDEBAR, HANDLE_CHANGE } from '../actions'

const initialState = {
  isSidebarOpen: false,
  isLoading: false,
  categories: [
    'entertainment',
    'shopping',
    'health & fitness',
    'groceries',
    'dining',
    'auto & transport',
    'gifts & donations',
    'travel',
    'bills & utilities',
    'other',
    'accomodation',
  ],
  payments: ['cash', 'debit', 'credit'],
  category: '',
  date: null,
  amount: 0,
  description: '',
  paymentType: '',
  isEditing: false,
}

const ExpenseContext = React.createContext()

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  const addExpense = (e) => {
    e.preventDefault()
    dispatch({ type: ADD_EXPENSE })
    // clear the form and add the new expense to DB
  }

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }

  return (
    <ExpenseContext.Provider
      value={{ ...state, toggleSidebar, addExpense, handleChange }}
    >
      {children}
    </ExpenseContext.Provider>
  )
}

export const useExpenseContext = () => {
  return useContext(ExpenseContext)
}
