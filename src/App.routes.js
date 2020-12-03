import { lazy } from 'react';

import { ROOT_ROUTE } from 'global/constants';

const Home = lazy(() => import(
  './pages/Home'
  /* webpackChunkName: "home" */
  /* webpackPrefetch: true */
));

const SignIn = lazy(() => import(
  './pages/SignIn'
  /* webpackChunkName: "sign-in" */
  /* webpackPrefetch: true */
));

export default [
  {
    path: ROOT_ROUTE.ROOT,
    component: Home,
  },
  {
    path: ROOT_ROUTE.SIGN_IN,
    component: SignIn,
  },
];
