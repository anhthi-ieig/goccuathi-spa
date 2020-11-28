import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import enLang from 'translations/en.json';
import viLang from 'translations/vi.json';

import { LANGUAGE } from 'global/constants';

import App from './App';

const languages = Object.freeze({
  [LANGUAGE.EN]: enLang,
  [LANGUAGE.VI]: viLang,
});

ReactDOM.render(
  <IntlProvider
    key={LANGUAGE.EN}
    locale={LANGUAGE.EN}
    messages={languages[LANGUAGE.EN]}
  >
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
