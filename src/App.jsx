// import './App.css'
import React from 'react';
import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"


// Import pages
// import SingleElim from './pages/singleElimination';
import SingleElim16 from './pages/16PlayerSingleElimination';
import SingleElim32 from './pages/32PlayerSingleElimination';
import TournamentInput from './pages/tournamentInput';

import Home from "./pages/home";
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Dashboard from './components/dashboard.component'
import Logout from './components/logout.component'
import UserManagement from "./pages/userManagement";

const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  return user !== null;
};


function App() {

  return (

  <Router>
    <Routes>
      <Route path="/single-elim-16" element={isAuthenticated() ? <SingleElim16 /> : <Login/>}/>
      <Route path="/single-elim-32" element={isAuthenticated() ? <SingleElim32 /> : <Login/>} />
      <Route path="/tournament-input" element={isAuthenticated() ? <TournamentInput /> : <Login/>} />

      <Route path="/admin" element={isAuthenticated() ? <UserManagement /> : <Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route exact path="/" element={!isAuthenticated() ? <Login /> : <Home/>} />
      <Route path="/" element={!isAuthenticated() ? <Login /> : <Home/>} />
      <Route path="/logout" element={!isAuthenticated() ? <Logout /> : <Home/>} />

      {/* Not sure if we will still be needing these */}
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  </Router>

  )
}

export default App
