import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div>
      <Navbar icon="bi bi-github" title="Github Finder" />
      <div className='container mb-3'>
        <User />
      </div>
    </div>
  );
}

export default App;
