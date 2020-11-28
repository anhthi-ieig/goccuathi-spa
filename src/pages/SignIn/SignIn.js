import React, { memo } from 'react';
import moment from 'moment';
import { camelCase } from 'lodash';
import { Button } from 'antd/lib/button';
import { StarFilled } from '@ant-design/icons';

import styles from './SignIn.less';

const SignIn = () => {
  console.log(moment().toISOString());
  console.log(camelCase('hello world'));

  return (
    <div className={styles.contentText}>
      <StarFilled />
      <Button type="primary">
        Click
      </Button>
    </div>
  );
};

export default memo(SignIn);
