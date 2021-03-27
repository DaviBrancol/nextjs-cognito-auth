module.exports = {
  "env": {
    "test": {
      "presets": [
        "@babel/preset-env",
        "@babel/react",
        "next/babel"
      ]
    },
    "development": {
      "presets": [
        "next/babel"
      ]
    },
    "production": {
      "presets": [
        "@babel/preset-env",
        "@babel/react",
        "next/babel"
      ],
      "plugins": [
        ["@babel/transform-runtime", {
          "regenerator": true
        }]
      ]
    },
  }
}