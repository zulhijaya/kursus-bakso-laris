// postcss.config.js
const autoprefixer = require("autoprefixer")();
const tailwindcss = require("tailwindcss")("./tailwind.config.js");

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
};