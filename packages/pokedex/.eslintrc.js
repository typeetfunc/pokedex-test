// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  "extends": "next/core-web-vitals",
  "rules": {
    "@next/next/no-html-link-for-pages": ["error", path.join(__dirname, 'pages')]
  }
}
