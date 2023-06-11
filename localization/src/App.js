import './App.css';
import { useState, useEffect } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl'

const messages = {
  "tr-TR": {
    title: "merhaba dünya",
    description: "{count} yeni mesajınız var"
  },
  "en-US": {
    title: "hello world",
    description: "you have {count} new messages"
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
          <FormattedMessage id='description' values={{ count: 3 }} />
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
