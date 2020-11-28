import { defineMessages } from 'react-intl';

const contextPath = 'signIn';
const localMsg = defineMessages({
  hello: {
    id: `${contextPath}-hello`,
    defaultMessage: 'Hello, World',
  },
  goodBye: {
    id: `${contextPath}-goodBye`,
    defaultMessage: 'Bye, {name}',
  },
});

export default localMsg;
