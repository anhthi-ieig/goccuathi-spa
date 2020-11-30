const reducers = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(START|SUCCESS|FAILED)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  const requestLoadingName = `${requestName}_LOADING`;
  const requestSuccessName = `${requestName}_SUCCESS`;
  const requestFailedName = `${requestName}_FAILED`;

  return {
    ...state,
    [requestLoadingName]: requestState === 'START',
    [requestSuccessName]: requestState === 'SUCCESS',
    [requestFailedName]: requestState === 'FAILED',
  };
};

export default {
  requestState: reducers,
};
