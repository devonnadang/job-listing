import logo from './logo.svg';
import './App.css';
import {NavLink} from 'react-router-dom';
import UserProfile from "./pages/UserProfile";


function App() {
  return (
    <div className="App">
      <UserProfile/>
    </div>
  );
}

export default App;
