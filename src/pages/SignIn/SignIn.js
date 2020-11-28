import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { StarFilled } from '@ant-design/icons';

import withIntlMessages from 'HOCs/withIntlMessages';

import pureMessages from './SignIn.messages';
import styles from './SignIn.less';

const SignIn = (props) => {
  const { messages } = props;

  console.log(messages.hello);

  return (
    <div className={styles.contentText}>
      <StarFilled />
      <Button type="primary">
        Click
      </Button>
    </div>
  );
};

SignIn.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default withIntlMessages(pureMessages)(SignIn);
