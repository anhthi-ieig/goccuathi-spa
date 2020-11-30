import { camelCase } from 'lodash';

const normalizeType = (actionType) => [
  camelCase(`is${actionType}Loading`),
  camelCase(`is${actionType}Success`),
  camelCase(`is${actionType}Failed`),
];

const getLoadingSelectors = (state, actionTypes) => actionTypes
  .reduce((acc, actionType) => {
    const [
      loadingType,
      successType,
      failedType,
    ] = normalizeType(actionType);

    acc[loadingType] = state.requestState[`${actionType}_LOADING`];
    acc[successType] = state.requestState[`${actionType}_SUCCESS`];
    acc[failedType] = state.requestState[`${actionType}_FAILED`];

    return acc;
  }, {});

export default getLoadingSelectors;
