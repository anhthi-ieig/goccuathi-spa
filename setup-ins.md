# 1. Clone and init project
# 2. Create project structure
  - config
    - app-path.config.js
    - postcss.config.js
    - webpack.common.js
    - webpack.dev.js
    - webpack.prod.js

  - src
    - assets
      - imgs
      - svgs

    - components
      - ...

    - core
      - create-store.js
      - http-client.js
      - request-reducers.js
      - request-selectors.js
      - root-effects.js
      - root-reducers.js

    - entities
      - ...

    - global
      - constants.js
      - general.messages.js
      - notify.messages.js
      - validate.messages.js

    - HOCs
      - withIntlMessages
        - index.js
        - withIntlMessages.js

    - pages
      - ...

    - styles
      - _base.less
      - _fonts.less
      - _variables.less
      - initial.less
      - resources.less

    - utils
      - helpers
      - rules

    - App.js
    - App.routes.js
    - index.html
    - render.js

  - .babelrc
  - .eslintrc
  - jsconfig.json

# 3. Setup Webpack
  - `npm i webpack webpack-cli webpack-dev-server webpack-merge -D`
  - Implement [app-path.config.js]
  - Implement [webpack.common.js] [webpack.dev.js] [webpack.prod.js]

# 4. Setup Babel
