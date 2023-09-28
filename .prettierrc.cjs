/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx'],
  semi: true,
  singleQuote: true,
};

module.exports = config;
