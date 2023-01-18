import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import App from './App'
import { UserProvider } from './context/user_context'
import { ExpenseProvider } from './context/expense_context'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserProvider>
      <ExpenseProvider>
        <App />
      </ExpenseProvider>
    </UserProvider>
  </React.StrictMode>
)
