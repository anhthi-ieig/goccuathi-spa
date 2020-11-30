import { snakeCase, camelCase } from 'lodash';

export default (actionType) => {
  if (typeof actionType !== 'string') {
    throw new Error('Invalid action type when flattening an action');
  }

  const standardizedType = snakeCase(actionType).toUpperCase();
  const standardizedAction = camelCase(actionType);

  const actionExec = (params) => ({
    type: standardizedType,
    payload: params,
  });

  return {
    [standardizedType]: standardizedType,
    [standardizedAction]: actionExec,
  };
};
