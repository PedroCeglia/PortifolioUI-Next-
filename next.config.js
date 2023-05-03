/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['react-tilt']);

module.exports = withTM({
  // ...rest of your config
  reactStrictMode: true
});


