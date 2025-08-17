import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Download from './pages/download'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/download' element={<Download/>} />
      </Routes>
    </Router>
  )
}

export default App