import React, { useEffect, useState } from 'react';
import Navigation from './component/Navigation'
import Messages from './pages/Messages'
import Applied from './pages/Applied'
import Saved from './pages/Saved'
import Login from './pages/Sign in/Login'
import UserDashboard from './pages/UserDash/UserDashboard';
import UserProfile from './pages/UserProfile'
import CreateAccount from './pages/Sign up/CreateAccount'
import EmployerDashboard from './pages/EmployerDashboard'
import { BrowserRouter, Routes, Route, Link, Navigate, Redirect} from "react-router-dom";
import Axios from 'axios';

Axios.defaults.withCredentials = true;

const App = () => {

  const[user, setUser] = useState(false);
  const[userID, setUserID] = useState(1);
    console.log("user_acount_id: " + userID);
    
    useEffect(()=> {
      Axios.get("http://localhost:3001/login").then((response) => {
          //console.log(response); // console logs user data to front end
          //setUser({user: false}); 
          if(response.data.loggedIn === true) {
              setUser(true);
              setUserID(response.data.user[0].user_account_id);
          } else {
              setUser(false);
          }
          //console.log("User login status: " + user);
      });
  }, [user]);

  return (
    <BrowserRouter>
      <div>
        <h1>{Login.loginStatus}</h1>
        <Link to ="/Login">Login|</Link>
        
        <Link to="/CreateAccount">CreateAccount</Link>
        <Routes>
          <Route path="/" element={user ? <Navigation /> : <Login/>} />

          <Route path="/Login" element={user ? <Navigate to="/Navigation" /> : <Login/>} />
          <Route path="/CreateAccount" element={user ? <Navigate to="/" /> : <CreateAccount/>} />

          <Route path="/Navigation" element={user ? <Navigation /> : <Login/>} />
          <Route path="/Dashboard" element={user ? <UserDashboard/> : <Login/>} />
          <Route path="/UserProf" element={user ? <UserProfile/> : <Login/>}/>
          
          <Route path="/EmployerDash" element={user ? <EmployerDashboard/> : <Login/>}/>
          <Route path="/Messages" element={user ? <Messages/> : <Login/>}/>
          <Route path="/Applied" element={user ? <Applied/> : <Login/>}/>
          <Route path="/Saved" element={user ? <Saved/> : <Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
