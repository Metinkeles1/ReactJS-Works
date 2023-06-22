import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import { MainLayout } from './layouts/MainLayout';
import Navbar from './components/Navbar/index';
import { ChakraProvider } from '@chakra-ui/react'

// pages
import Signup from './pages/Auth/Signup';
import Singin from './pages/Auth/Signin';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'signup', element: <Signup /> },
      { path: 'signin', element: <Singin /> }
    ]
  }
])

function App() {
  return (
    <div >
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </div>
  );
}

export default App;
