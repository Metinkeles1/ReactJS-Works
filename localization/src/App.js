import './App.css';
import { useState } from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

const messages = {
  "TR": {
    title: "merhaba dünya",
    description: "3 yeni mesajınız var"
  },
  "EN": {
    title: "hello world",
    description: "you have 3 new messages"
  }
}

function App() {

  const [lng, setLng] = useState("TR");

  return (
    <div className="App">
      <IntlProvider messages={messages[lng]}>
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id='description' />
        </p>

        <br />
        <br />
        <button onClick={() => setLng("TR")}>Tr</button>
        <button onClick={() => setLng("EN")}>En</button>
      </IntlProvider>
    </div>
  );
}

export default App;
