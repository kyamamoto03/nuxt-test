module.exports = {
    root: true,
      env: {
        browser: true,
        node: true
      },
      extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/vue'
      ],
      plugins: [
        'vue'
      ],
      rules: {
        'vue/html-closing-bracket-newline': 'off',
        "no-unused-vars": 'off',
        "@typescript-eslint/no-unused-vars": 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': 0,
        "prettier/prettier": ["error", {
          "endOfLine":"auto"
        }],
      },
      
}