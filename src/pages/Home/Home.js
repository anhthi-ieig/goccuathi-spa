import React, {
  memo, useEffect, useState, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import withIntlMessages from 'HOCs/withIntlMessages';

import pureMessages from './Home.messages';

const Home = (props) => {
  const { messages } = props;

  const [
    count,
    setCount,
  ] = useState(0);

  const prevCount = useRef(count);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('useEffect with NO dependencies');

    return () => {
      console.log('useEffect with NO dependencies - in return function');
    };
  });

  useEffect(() => {
    prevCount.current = count;
    console.log('useEffect with COUNT dependencies', prevCount.current);

    return () => {
      prevCount.current = `${count}_new`;
      console.log('useEffect with COUNT dependencies - in return function', prevCount.current);
    };
  }, [count]);

  console.log('component render');

  return (
    <div>
      <p>
        Current count:
        &nbsp;
        {count}
      </p>
      <p>
        Prev count:
        &nbsp;
        {prevCount.current}
      </p>
      <button
        type="button"
        onClick={handleIncrease}
      >
        {messages.inCrease}
      </button>
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
