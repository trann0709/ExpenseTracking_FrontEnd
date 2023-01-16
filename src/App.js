import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage, Error } from './pages/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
