import { snakeCase, camelCase } from 'lodash';
import { message } from 'antd';

import { HTTP_STATUS, VALIDATION } from 'global/constants';

export default (actionType) => {
  if (typeof actionType !== 'string') {
    throw new Error('Invalid action type when flattening a request action');
  }

  const standardizedType = snakeCase(actionType).toUpperCase();
  const typeStart = `${standardizedType}_START`;
  const typeSuccess = `${standardizedType}_SUCCESS`;
  const typeFailed = `${standardizedType}_FAILED`;

  const standardizedAction = camelCase(actionType);
  const actionNameStart = `${standardizedAction}Start`;
  const actionNameSuccess = `${standardizedAction}Success`;
  const actionNameFailed = `${standardizedAction}Failed`;

  const actionStart = (params) => ({
    type: typeStart,
    payload: params,
  });

  const actionSuccess = (result) => ({
    type: typeSuccess,
    payload: result.data,
    status: result.status,
  });

  const actionFailed = (error) => {
    const {
      response: {
        status, data,
      },
    } = error;

    switch (status) {
      case HTTP_STATUS.INTERNAL_SERVER_ERROR: {
        message.error('Something went wrong. Check it later');

        break;
      }

      case HTTP_STATUS.UNAUTHORIZED: {
        message.error('Token expired! Application is refreshing');

        setTimeout(() => {
          window.location.reload();
        }, 3000);

        break;
      }

      case HTTP_STATUS.UN_PROCESSABLE_ENTITY: {
        if (data.type === VALIDATION.EXISTED) {
          message.warn(`${data.value} is already existed`);
        }

        break;
      }

      default:
        break;
    }

    return {
      type: typeFailed,
      payload: data,
      status,
    };
  };

  return {
    [typeStart]: typeStart,
    [typeSuccess]: typeSuccess,
    [typeFailed]: typeFailed,
    [actionNameStart]: actionStart,
    [actionNameSuccess]: actionSuccess,
    [actionNameFailed]: actionFailed,
  };
};
