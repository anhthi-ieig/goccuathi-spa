import React, { memo } from 'react';
import { Button } from 'antd';

import styles from './SignIn.less';

const SignIn = () => (
  <div className={styles.contentText}>
    Hello World
    <Button type="primary">
      Click
    </Button>
  </div>
);

export default memo(SignIn);
