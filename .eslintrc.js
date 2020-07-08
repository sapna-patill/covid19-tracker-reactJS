module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
       
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
       
    ],

    "parser": "react-scripts/node_modules/babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/prop-types': 0,
    }
};