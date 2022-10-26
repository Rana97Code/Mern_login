import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './user/Login';
import Register from './user/Register';
import Dashboard from './dashboard/Dashboard';
import Home from './dashboard/Home';
import Profile from './user/Profile';
import ProfileList from './user/ProfileList';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
        <Dashboard/>
          <Routes>
            <Route path="/Login" element={<Login/>} />
          </Routes>

          <Routes>
            <Route path="/Home" element={<Home/>} />
          </Routes>


          <Routes>
            <Route path="/ProfileList" element={<ProfileList/>} />
          </Routes>

          <Routes>
            <Route path="/Profile/:id" element={<Profile/>} />
          </Routes>
          
        

          <Routes>
            <Route path="/Register" element={<Register/>} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
