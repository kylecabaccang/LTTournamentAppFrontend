// import './App.css'
import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

// Import pages
// import SingleElim from './pages/singleElimination';
import SingleElim16 from './pages/16PlayerSingleElimination';
import SingleElim32 from './pages/32PlayerSingleElimination';
import TournamentInput from './pages/tournamentInput';

import Login from './components/login.component'
import SignUp from './components/signup.component'
import Dashboard from './components/dashboard.component'
import Logout from './components/logout.component'
import UserManagement from "./pages/userManagement";


function App() {

  return (
    <Router>
        <Routes>
          <Route path="/single-elim-16" element={<SingleElim16 />} />
          <Route path="/single-elim-32" element={<SingleElim32 />} />
          <Route path="/tournament-input" element={<TournamentInput />} />

          <Route path="/admin" element={<UserManagement />} />
          <Route exact path="/" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
    </Router>

  )
}

export default App
