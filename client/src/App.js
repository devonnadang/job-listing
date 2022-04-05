import React from 'react';
import Messages from './pages/Messages'
import Applied from './pages/Applied'
import Saved from './pages/Saved'
import UserDashboard from './pages/UserDashboard';
import UserProfile from './pages/UserProfile'
import CreateAccount from './pages/Sign up/CreateAccount'
import EmployerDashboard from './pages/EmployerDashboard'
import Navbar from './component/Navbar';
import "./App.css"
import Navigation from './pages/Navigation'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";


const App = () => {
  //const user = false;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
    fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        },
    })
        .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
        setUser(resObject.user);
        })
        .catch((err) => {
        console.log(err);
        });
    };
    getUser();
}, []);

  //console.log(user)
  return (
    <BrowserRouter>
      <div>
        <Navbar user = {user}/>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route 
            path="/Login" 
            element={user ? <Navigate to="/" /> : <Login />} 
          />
          <Route path="/UserProfile" element={user ? <UserProfile /> : <Login />} />
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/Applied" element={user ? <Applied /> : <Login />} />
          <Route path="/Messages" element={user ? <Messages /> : <Login />} />
          <Route path="/Saved" element={user ? <Saved/> : <Login/>} />
          <Route path="/CreateAccount" element={user ? <Navigation/> : <CreateAccount/>} />      
          <Route path="/EmployerDashboard" element={user ? <EmployerDashboard/> : <Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
/*
<Route path="/"><Navigation/></Route>
        <Route path="/Dashboard"><UserDashboard/></Route>
*/