
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/typedef */
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    !dev &&
      cssnano({
        preset: "default",
      }),
  ],
};

module.exports = config;