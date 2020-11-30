import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReactReduxProvider } from 'react-redux';
import { createBrowserHistory } from 'history';

import createStore from 'core/create-store';

import App from './App';

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <ReactReduxProvider store={store}>
    <App history={history} />
  </ReactReduxProvider>,
  document.getElementById('root'),
);
