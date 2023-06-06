import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Container from './components/Container';

function App() {
  return (
    <div >
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;
