import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { snakeCase } from 'lodash';

import Loading from 'components/Loading';

const SwitchRoutes = (props) => {
  const { routes } = props;

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={snakeCase(route.path)}
            {...route}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

SwitchRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    exact: PropTypes.bool,
    path: PropTypes.string,
    component: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
    ]),
    render: PropTypes.func,
  })).isRequired,
};

export default SwitchRoutes;
