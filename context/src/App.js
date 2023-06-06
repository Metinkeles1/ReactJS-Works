import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Container from './components/Container';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div >
      <ThemeProvider>
        <UserProvider>
          <Container />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
