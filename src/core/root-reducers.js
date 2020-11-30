import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { DESTROY_APP_STATE } from 'entities/app/app.actions';

import requestState from './request-reducers';

const appReducers = (history) => combineReducers({
  router: connectRouter(history),
  ...requestState,
});

export default (history) => (state, action) => {
  if (action.type === DESTROY_APP_STATE) {
    const appState = {};
    return appReducers(history)(appState, action);
  }

  return appReducers(history)(state, action);
};
