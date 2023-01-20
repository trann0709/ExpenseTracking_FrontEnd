import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/allExpenses_reducer'

const AllExpensesContext = React.createContext()

const initialState = {
  isLoading: false,
  allExpenses: [],
}

export const AllExpensesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AllExpensesContext.Provider value={{ ...state }}>
      {children}
    </AllExpensesContext.Provider>
  )
}

export const useAllExpensesContext = () => {
  return useContext(AllExpensesContext)
}
