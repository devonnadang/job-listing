import React from 'react';
import Messages from './pages/Messages'
import Applied from './pages/Applied'
import Saved from './pages/Saved'
import Login from './pages/Sign in/Login'
import UserDashboard from './pages/UserDash/UserDashboard';
import UserProfile from './pages/UserProfile'
import CreateAccount from './pages/Sign up/CreateAccount'
import EmployerDashboard from './pages/EmployerDashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  render() {return (
    <Router>
    <div>
      {/*<Link to="/">Login|</Link>
      <Link to="/CreateAccount">CreateAccount|</Link>*/}
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
