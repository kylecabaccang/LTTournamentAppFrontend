// import './App.css'
import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

// Import pages
import SingleElim from './pages/singleElimination';
import Test from './pages/test';


function App() {

  return (
    <Router>
        <Routes>
          <Route path="/single-elim" element={<SingleElim />} />
          <Route path="/test" element={<Test />} />
        </Routes>
    </Router>

  )
}

export default App
