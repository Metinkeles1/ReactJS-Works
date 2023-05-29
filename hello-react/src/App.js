import './App.css';
import Header from './components/Header'

const name = "metin";

function App() {
  return (
    <div>
      <Header />

      <p className="xyz">loremfa-rotate-180</p>

      <label htmlFor='myinput'>
        name
        <input id="myinput" />
      </label>

      <div>
        {name}
      </div>
    </div>

  );
}

export default App;
