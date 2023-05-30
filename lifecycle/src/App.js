import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('Metin');

  // useEffect(() => {
  //   console.log("State Update");
  // })

  useEffect(() => {
    console.log("component mount edildi");
  }, [])

  useEffect(() => {
    console.log("number component update");
  }, [number])

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>click</button>

      <br />

      <h1>{name}</h1>
      <button onClick={() => setName("Keleş")}>click</button>
    </div>
  );
}

export default App;
