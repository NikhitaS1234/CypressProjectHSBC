const { defineConfig } = require("cypress");

module.exports = defineConfig({
 // defaultCommandTimeout: 1000000,
  pageLoadTimeout:30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
