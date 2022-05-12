import React, { useEffect, useState } from 'react';
import Navigation from './component/Navigation'
import Messages from './pages/Messages'
import Applied from './pages/Applied'
import Saved from './pages/Saved'
import Login from './pages/Sign in/Login'
import UserDashboard from './pages/UserDash/UserDashboard';
import UserProfile from './pages/UserProfile'
import Network from './pages/Network'
import ViewProfile from './pages/ViewProfile';
import CreateAccount from './pages/Sign up/CreateAccount'
import EmployerDashboard from './pages/EmployerDashboard'
import { BrowserRouter, Routes, Route, Navigate,} from "react-router-dom";
import Axios from 'axios';

Axios.defaults.withCredentials = true;

const App = () => {

  const[user, setUser] = useState(false);
    
    useEffect(()=> {
      Axios.get("http://localhost:3001/login").then((response) => {
          if(response.data.loggedIn === true) {
              setUser(true);
          } else {
              setUser(false);
          }
          //console.log("User login status: " + user);
      });
  }, []);

  const logout = () => {
    Axios.get("http://localhost:3001/logout").then((response) => {
          //console.log(response); // console logs user data to front end
          if(response.data.loggedIn === false) {
              setUser(false);
          } else {
              setUser(true);
          }
      });
  }

  return (
    <BrowserRouter>
      <div>
        <div>
          <button onClick={logout} type="submit">Logout</button>
        </div>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/Dashboard" /> : <Login/>} />
          <Route path="/Login" element={user ? <Navigate to="/Dashboard" /> : <Login/>} />
          <Route path="/CreateAccount" element={user ? <Navigate to="/Dashboard" /> : <CreateAccount/>} />

          <Route path="/Network" element={user ? <Network/> : <Login/>} />
          <Route path="/Navigation" element={user ? <Navigation /> : <Login/>} />
          <Route path="/Dashboard" element={user ? <UserDashboard/> : <Login/>} />
          <Route path="/UserProf" element={user ? <UserProfile/> : <Login/>}/>
          <Route path="/user/:id" element={user ? <ViewProfile/> : <Login/>}/>
          
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
