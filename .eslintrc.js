module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "import/no-named-as-default": "off",
      "import/no-cycle": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "import/prefer-default-export": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "react/button-has-type": "off",
      "jsx-a11y/label-has-for": "off",
      "react/prop-types": "off",
      "no-unused-expressions": "off",
      "global-require": "off",
      "import/no-dynamic-require": "off",
      "one-var": 0,
      "one-var-declaration-per-line": 0,
      "new-cap": 0,
      "consistent-return": 0,
      "array-callback-return": 0,
      "no-console": 0,
      "no-param-reassign": 0,
      "class-methods-use-this": "off",
      "comma-dangle": 0,
      "curly": [
        "error",
        "multi-line"
      ],
      "import/no-unresolved": [
        0,
        { "caseSensitive": false }
      ],
      "no-shadow": [
        "error",
        {
          "allow": [
            "req",
            "res",
            "err"
          ]
        }
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "always"
      ]
    }
  }