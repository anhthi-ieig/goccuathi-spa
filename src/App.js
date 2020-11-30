import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter } from 'connected-react-router';

import SwitchRoutes from 'components/SwitchRoutes';
import enLang from 'translations/en.json';
import viLang from 'translations/vi.json';
import { LANGUAGE } from 'global/constants';

import rootRoutes from './App.routes';

const languages = Object.freeze({
  [LANGUAGE.EN]: enLang,
  [LANGUAGE.VI]: viLang,
});

const App = (props) => {
  const { history } = props;
  const [lang] = useState(LANGUAGE.EN);

  return (
    <IntlProvider
      key={lang}
      locale={lang}
      messages={languages[lang]}
    >
      <ConnectedRouter history={history}>
        <SwitchRoutes routes={rootRoutes} />
      </ConnectedRouter>
    </IntlProvider>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default memo(App);
