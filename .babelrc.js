module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    [
      "module-resolver",
      {
        "root": "./src"
      }
    ],
    [
      "import",
      {
        "libraryName": "antd",
        "style": true
      }
    ],
    [
      "transform-imports",
      {
        "@ant-design/icons": {
          "transform": "@ant-design/icons/${member}",
          "preventFullImport": true
        },
        "lodash": {
          "transform": "lodash/${member}",
          "preventFullImport": true
        }
      }
    ]
  ]
}