import { defineMessages } from 'react-intl';

const contextPath = 'signIn';

export default defineMessages({
  hello: {
    id: `${contextPath}-hello`,
    defaultMessage: 'Hello, {name}',
  },
});
