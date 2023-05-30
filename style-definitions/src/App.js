import './App.css';

import A from "./components/A"
import B from "./components/B"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ color: 'red', backgroundColor: 'white' }}>
          lorem ipsum dolor sit amet consectetur
        </div>

        <A />
        <B />
      </header>
    </div>
  );
}

export default App;
