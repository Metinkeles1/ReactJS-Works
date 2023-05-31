import './App.css';

// pages
import Users from './components/Users';
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
        <Route path='' Component={Home} />
        <Route path='about' Component={About} />
        <Route path='users' Component={Users} />
      </Routes>
    </Router>
  );
}


export default App;
