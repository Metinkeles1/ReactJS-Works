import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import About from './components/About';

// pages

const router = createBrowserRouter([

  { path: 'about', element: <About /> },

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
