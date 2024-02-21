const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://renweb-staging.renmoney.com/",
    defaultCommandTimeout: 30000,
    watchForFileChanges: false,
    pageLoadTimeout: 30000,
    viewportHeight: 800,
    viewportWidth: 1500,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //on('task', {downloadFile})
    },
  },


});
