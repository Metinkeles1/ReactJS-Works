import './App.css';

// pages
import Users from './components/Users';
import Home from './components/Home';
import About from './components/About';
import { Contact } from './components/help/Contact';
import { Faq } from './components/help/Faq';
import User from './components/User';

// layouts
import { MainLayout } from './layouts/MainLayout';
import { HelpLayout } from './layouts/HelpLayout';
import { UserLayout } from './layouts/UserLayout';

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
      {
        path: 'help',
        element: <HelpLayout />,
        children: [
          { path: 'contact', element: <Contact /> },
          { path: 'faq', element: <Faq /> }
        ]
      },
      {
        path: 'users',
        element: <UserLayout />,
        children: [
          { index: true, element: <Users /> },
          { path: ':id', element: <User /> },
        ]
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />

  );
}


export default App;
