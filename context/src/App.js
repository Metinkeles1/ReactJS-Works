import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div >
      <ThemeProvider>
        <Header />
        <hr />
        <Button />
        <br />
      </ThemeProvider>
    </div>
  );
}

export default App;
