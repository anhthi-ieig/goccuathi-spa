import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import rootEffects from './root-effects';
import rootReducers from './root-reducers';

/**
 * MiddleWares
 */

const sagaMiddleware = createSagaMiddleware();

const appState = {};
const composeEnhancer = process.env.NODE_ENV === 'production'
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (history) => {
  const store = createStore(
    rootReducers(history),
    appState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
      ),
    ),
  );

  sagaMiddleware.run(rootEffects);
  return store;
};
