import { useState } from "react";
import Counter from "./components/Counter"
import './App.css';

function App() {
  const [isvisible, setIsvisible] = useState(true);

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {isvisible && <Counter />}

      <button onClick={() => setIsvisible(!isvisible)}>Toggle</button>
    </div>
  );
}

export default App;
