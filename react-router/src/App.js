import './App.css';

// pages
import Users from './components/Users';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';

import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  { index: true, element: (<Home />) },
  { path: 'About', element: (<About />) },
  { path: 'users', element: (<Users />) }
])

function App() {

  return (
    <RouterProvider router={router} />

    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>


    //   {/* <Routes>
    //     <Route path='/' exact element={<Home />} />
    //     <Route path='about' element={<About />} />
    //     <Route path='users' element={<Users />}>
    //       <Route path=':id' element={<Users />} />
    //     </Route>
    //   </Routes> */}
    // </Router>
  );
}


export default App;
