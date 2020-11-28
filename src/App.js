import React, { memo } from 'react';

import { hello } from 'global/constants';

const App = () => {
  hello();

  return (
    <div>
      Hello World
    </div>
  );
};

export default memo(App);
