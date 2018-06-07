module.exports = {
    "root": true,
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "impliedStrict": true,
            "globalReturn": false,
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "env": {
        "browser": true,
        "amd": true,
        "worker": true,
        "es6": true
    },
    "rules": {
        "space-before-function-paren": 0,
        "one-var": [0, "never"],
        "indent": 0,
        "no-unused-vars": 2,
        "no-debugger": 2,
        "key-spacing": 0,
        "no-dupe-keys": 2,
        "max-nested-callbacks": ["error", {
            "max": 4
        }],
        "no-multiple-empty-lines": 0,
        "react/jsx-indent-props": 0,
        "object-curly-spacing": 0,
        "react/jsx-no-duplicate-props": 2,
        "react/prop-types": 2,
        "react/jsx-max-props-per-line": 0,
        "react/display-name": 0,
        "react/jsx-handler-names": 0,
        "react/jsx-indent": 0,
        "react/jsx-curly-spacing": 0,
        "react/jsx-no-bind": [2, {
            "ignoreRefs": true,
            "allowArrowFunctions": true,
            "allowBind": false
        }],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2
    }
}
