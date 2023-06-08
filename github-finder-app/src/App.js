import './App.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <Navbar icon="bi bi-github" title="Github Finder" />
      <div className='container mb-3'>
        <UserList />
      </div>
    </div>
  );
}

export default App;
