import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage, Error } from './pages'
import {
  Home,
  Profile,
  AddExpense,
  AllExpenses,
  SharedLayout,
} from './pages/dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/welcome' element={<LandingPage />} />
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='all-expenses' element={<AllExpenses />} />
          <Route path='add-expense' element={<AddExpense />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
