import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import { MainLayout } from './layouts/MainLayout';
import Navbar from './components/Navbar/index';

// pages

const router = createBrowserRouter([

  {
    path: '/',
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
    ]
  }
])

function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
