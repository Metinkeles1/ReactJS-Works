import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState("Metin");

  return (
    <div className="App">
      <h1>merhaba {name}</h1>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
    </div>
  );
}

export default App;
