module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended", 'plugin:react/recommended'],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "@": true
    },
    "rules": {
        "indent": [
            "error",
            2,
            {"SwitchCase": 1, "VariableDeclarator": 1, "MemberExpression": 1}
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
        "arrow-spacing": [
            "error",
            { "before": true, "after": true }
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "getter-return": [
            "error" , 
            {"allowImplicit": true}
        ],
        "no-console": [
            "error",
            {"allow": ["info", "log", "warn", "error"]}
        ],
        "no-const-assign": [
            "error"
        ],
        "no-new-symbol": [
            "warn"
        ],
        "no-this-before-super": [
            "error"
        ],
        "no-mixed-spaces-and-tabs": [
            "error"
        ],
        "no-dupe-class-members": [
            "error"
        ],
        "no-undef": [
            "error"
        ],
        "no-unused-vars": [
            2,
        ],
        "no-delete-var":[
            "error"
        ],
        "no-useless-escape": [
            "error"
        ],
        "no-unused-labels": [
            "error"
        ],
        "no-self-assign": [
            "error"
        ],
        "no-redeclare": [
            "error"
        ],
        "no-octal": [
            "off"
        ],
        "no-global-assign": [
            "error"
        ],
        "no-fallthrough": [
            "error"
        ],
        "no-empty-pattern": [
            "error"
        ],
        "no-case-declarations": [
            "off"
        ],
        "valid-typeof": [
            "error",
            {"requireStringLiterals": true}
        ],
        "use-isnan": [
            "error"
        ],
        "no-unsafe-negation": [
            "error"
        ],
        "no-unsafe-finally": [
            "error"
        ],
        "no-unreachable": [
            "error"
        ],
        "no-unexpected-multiline": [
            "error"
        ],
        "no-template-curly-in-string": [
            "error"
        ],
        "no-sparse-arrays": [
            "error"
        ],
        "no-regex-spaces": [
            "error"
        ],
        "no-prototype-builtins": [
            "error"
        ],
        "no-obj-calls": [
            "error"
        ],
        "no-irregular-whitespace": [
            "error",
            {"skipStrings": true, "skipComments": true, "skipRegExps": true, "skipTemplates": true}
        ],
        "no-invalid-regexp": [
            "error"
        ],
        "no-extra-semi": [
            "error"
        ],
        "no-extra-boolean-cast": [
            "error"
        ],
        "no-empty": [
            "error"
        ],
        "no-empty-character-class": [
            "error"
        ],
        "no-dupe-keys": [
            "error"
        ],
        "no-dupe-args": [
            "error"
        ],
        "eqeqeq": [
            "error"
        ],
        "no-alert": [
            "error"
        ],
        "no-caller": [
            "error"
        ],
        "default-case": ["error", { "commentPattern": "^skip\\sdefault" }],
        "no-empty-function": [
            "off"
        ],
        "no-with": [
            "error"
        ],
        "block-spacing": [
            "error"
        ],
        "comma-dangle": [
            "off"
        ],
        "constructor-super": [
            "error"
        ],
        'react/display-name': 0,
        'react/jsx-key': 0,
        'react/jsx-no-comment-textnodes': 0,
        'react/jsx-no-duplicate-props': 0,
        'react/jsx-no-target-blank': 0,
        'react/jsx-no-undef': 0,
        'react/jsx-uses-react': 0,
        'react/jsx-uses-vars': 0,
        'react/no-children-prop': 0,
        'react/no-danger-with-children': 0,
        'react/no-deprecated': 0,
        'react/no-direct-mutation-state': 0,
        'react/no-find-dom-node': 0,
        'react/no-is-mounted': 0,
        'react/no-render-return-value': 0,
        'react/no-string-refs': 0,
        'react/no-unescaped-entities': 0,
        'react/no-unknown-property': 0,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'react/require-render-return': 0,
        'boolean-prop-naming': 0,
        'button-has-type': 0,
        'default-props-match-prop-types': 0,
        'destructuring-assignment': 0,
        'display-name': 0,
        'forbid-component-props': 0,
        'forbid-dom-props': 0,
        'forbid-elements': 0,
        'forbid-foreign-prop-types': 0,
        'forbid-prop-types': 0,
        'jsx-boolean-value': 0,
        'jsx-child-element-spacing': 0,
        'jsx-closing-bracket-location': 0,
        'jsx-closing-tag-location': 0,
        'jsx-curly-spacing': 0,
        'jsx-equals-spacing': 0,
        'jsx-filename-extension': 0,
        'jsx-first-prop-new-line': 0,
        'jsx-handler-names': 0,
        'jsx-indent': 0,
        'jsx-indent-props': 0,
        'jsx-key': 0,
        'jsx-max-depth': 0,
        'jsx-max-props-per-line': 0,
        'jsx-no-bind': 0,
        'jsx-no-comment-textnodes': 0,
        'jsx-no-duplicate-props': 0,
        'jsx-no-literals': 0,
        'jsx-no-target-blank': 0,
        'jsx-one-expression-per-line': 0,
        'jsx-no-undef': 0,
        'jsx-curly-brace-presence': 0,
        'jsx-pascal-case': 0,
        'jsx-sort-default-props': 0,
        'jsx-sort-props': 0,
        'jsx-space-before-closing': 0,
        'jsx-tag-spacing': 0,
        'jsx-uses-react': 0,
        'jsx-uses-vars': 0,
        'jsx-wrap-multilines': 0,
        'no-access-state-in-setstate': 0,
        'no-array-index-key': 0,
        'no-children-prop': 0,
        'no-danger': 0,
        'no-danger-with-children': 0,
        'no-deprecated': 0,
        'no-did-mount-set-state': 0,
        'no-did-update-set-state': 0,
        'no-direct-mutation-state': 0,
        'no-find-dom-node': 0,
        'no-is-mounted': 0,
        'no-multi-comp': 0,
        'no-set-state': 0,
        'no-string-refs': 0,
        'no-redundant-should-component-update': 0,
        'no-render-return-value': 0,
        'no-this-in-sfc': 0,
        'no-typos': 0,
        'no-unescaped-entities': 0,
        'no-unknown-property': 0,
        'no-unused-prop-types': 0,
        'no-unused-state': 0,
        'no-will-update-set-state': 0,
        'prefer-es6-class': 0,
        'prefer-stateless-function': 0,
        'prop-types': 0,
        'react-in-jsx-scope': 0,
        'require-default-props': 0,
        'require-optimization': 0,
        'require-render-return': 0,
        'self-closing-comp': 0,
        'sort-comp': 0,
        'sort-prop-types': 0,
        'style-prop-object': 0,
        'void-dom-elements-no-children': 0,
    }
};
