import React from 'react';
import Navigation from './component/Navigation'
import Messages from './pages/Messages'
import Applied from './pages/Applied'
import Saved from './pages/Saved'
import Login from './pages/Sign in/Login'
import UserDashboard from './pages/UserDash/UserDashboard';
import UserProfile from './pages/UserProfile'
import CreateAccount from './pages/Sign up/CreateAccount'
import EmployerDashboard from './pages/EmployerDashboard'
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {

  //console.log(user)
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<UserDashboard/>}/>
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Dashboard" element={<UserDashboard/>}/>

          <Route path="/UserProf" element={<UserProfile/>}/>
          <Route path="/CreateAccount" element={<CreateAccount/>}/>
          <Route path="/EmployerDash" element={<EmployerDashboard/>}/>
          <Route path="/Messages" element={<Messages/>}/>
          <Route path="/Applied" element={<Applied/>}/>
          <Route path="/Saved" element={<Saved/>}/>

          
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
/*
class App extends React.Component {
  render() {return (
    <Router>
    <div>
      <Link to="/">Login|</Link>
      <Link to="/CreateAccount">CreateAccount|</Link>
      <Switch>
        <Route path="/Dashboard"><UserDashboard /></Route>
        <Route path="/UserProf"><UserProfile /></Route>
        <Route path="/CreateAccount"><CreateAccount /></Route>
        <Route path="/EmployerDash"><EmployerDashboard /></Route>
        <Route path="/Messages"><Messages /></Route>
        <Route path="/Applied"><Applied /></Route>
        <Route path="/Saved"><Saved /></Route>
        <Route path="/"><Login /></Route>
      </Switch>
    </div>
    </Router>
  );}
}

export default App;
*/
