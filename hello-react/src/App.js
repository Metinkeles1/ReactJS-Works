import './App.css';
import Header from './components/Header'
import User from './components/User'

const name = "metin";

function App() {
  return (
    <div>
      {/* <Header />

      <p className="xyz">loremfa-rotate-180</p>

      <label htmlFor='myinput'>
        name
        <input id="myinput" />
      </label>

      <div>
        {name}
      </div> */}

      <User name="Metin" surName="Keleş" />
    </div>

  );
}

export default App;
