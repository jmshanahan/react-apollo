module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    
    "plugins": [
        "react"
    ],
    "extends": ["eslint:all","plugin:react/recommended"],

    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "sort-imports": ["error", { 
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none"]
        }],
        "max-len": [1, 100, 4] 
    }
};