import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import withIntlMessages from 'HOCs/withIntlMessages';

import pureMessages from './Home.messages';

const Home = (props) => {
  const { messages } = props;

  return (
    <div>
      {messages.home}
    </div>
  );
};

Home.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default compose(
  memo,
  withIntlMessages(pureMessages),
)(Home);
