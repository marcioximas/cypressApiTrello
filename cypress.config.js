const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    viewportHeight: 880,
    viewportWidth: 1280,
    baseUrl: "https://api.trello.com/1",
    video: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "webpack",
    },
  },
});
