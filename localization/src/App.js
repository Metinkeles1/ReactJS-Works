import './App.css';
import { useState, useEffect } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl'

const messages = {
  "tr-TR": {
    title: "merhaba dünya",
    description: "3 yeni mesajınız var"
  },
  "en-US": {
    title: "hello world",
    description: "you have 3 new messages"
  }
}

function App() {
  const isLocale = localStorage.getItem("language");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [lng, setLng] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("language", lng);
  }, [lng])

  return (
    <div className="App">
      <IntlProvider locale={lng} messages={messages[lng]}>
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id='description' />
        </p>

        <br />
        <br />
        <button onClick={() => setLng("tr-TR")}>Tr</button>
        <button onClick={() => setLng("en-US")}>En</button>
      </IntlProvider>
    </div>
  );
}

export default App;
