import './App.css'
import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

// Import pages
import SingleElim from './pages/singleElimination';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/single-elim" element={<SingleElim />} />
        </Routes>
    </Router>

  )
}

export default App
