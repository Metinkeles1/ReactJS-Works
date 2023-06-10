import './App.css';

// pages
import Users from './components/Users';
import Home from './components/Home';
import About from './components/About';
import { Contact } from './components/help/Contact';
import { Faq } from './components/help/Faq';
// import User from './components/User';

// layouts
import { MainLayout } from './layouts/MainLayout';
import { HelpLayout } from './layouts/HelpLayout';

import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'users', element: <Users /> },
      {
        path: 'help',
        element: <HelpLayout />,
        children: [
          { path: 'contact', element: <Contact /> },
          { path: 'faq', element: <Faq /> }
        ]
      }
    ]
  }
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
