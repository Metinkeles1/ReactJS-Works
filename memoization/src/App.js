import './App.css';
import { useState, useMemo } from 'react'
import Header from './components/Header'

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');
  // const data = useMemo(() => {
  //   return { name: 'metin' }
  // }, [])

  const data = useMemo(() => {
    return calculateObject();
  }, [number])
  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data} />
      <hr />
      <h1>
        {number}
      </h1>
      <button onClick={() => setNumber(number + 1)}>arttır</button>
      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

function calculateObject() {
  console.log('calculatig..');
  for (let i = 0; i < 1000000000; i++) { }
  console.log("calculating completetd")
  return { name: "metin" }
}

export default App;
