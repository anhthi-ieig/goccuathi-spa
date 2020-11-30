export const LANGUAGE = Object.freeze({
  EN: 'en',
  VI: 'vi',
});

export const ROOT_ROUTE = Object.freeze({
  ROOT: '/',
  SIGN_IN: '/sign-in',
});

export const VALIDATION = Object.freeze({
  INVALID: 'validation.invalid',
  EXISTED: 'validation.existed',
  NOT_EXISTED: 'validation.not.existed',
  REQUIRED: 'validation.required',
});

export const HTTP_STATUS = Object.freeze({
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  UN_PROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
});
