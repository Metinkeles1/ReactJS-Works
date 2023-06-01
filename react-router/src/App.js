import './App.css';

// pages
import Users from './components/Users';
import User from './components/User';
import Home from './components/Home';
import About from './components/About';

import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>


      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/users' Component={Users} />
        <Route path='/user/:id' Component={User} />
      </Routes>
    </Router>
  );
}


export default App;
