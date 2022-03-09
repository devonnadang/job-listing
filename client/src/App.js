import React from 'react';
import Login from './pages/Sign in/Login'
import UserDashboard from './pages/UserDashboard';
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
      <Link to="/">Login</Link>
      <Link to="/Dashboard">Dashboard</Link>
      <Link to="/UserProf">UserProf</Link>
      <Link to="/CreateAccount">CreateAccount</Link>
      <Link to="/EmployerDash">EmployerDash</Link>
      <Switch>
        <Route path="/Dashboard"><UserDashboard /></Route>
        <Route path="/UserProf"><UserProfile /></Route>
        <Route path="/CreateAccount"><CreateAccount /></Route>
        <Route path="/EmployerDash"><EmployerDashboard /></Route>
        <Route path="/"><Login /></Route>
      </Switch>
    </div>
    </Router>
  );}
}

export default App;
