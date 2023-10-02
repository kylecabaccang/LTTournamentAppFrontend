// import './App.css'
import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

// Import pages
// import SingleElim from './pages/singleElimination';
import SingleElim16 from './pages/16PlayerSingleElimination';
import SingleElim32 from './pages/32PlayerSingleElimination';



function App() {

  return (
    <Router>
        <Routes>
          <Route path="/single-elim-16" element={<SingleElim16 />} />
          <Route path="/single-elim-32" element={<SingleElim32 />} />

        </Routes>
    </Router>

  )
}

export default App
