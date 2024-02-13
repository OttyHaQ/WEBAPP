const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 20000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //on('task', {downloadFile})
    },
  },
  pageLoadTimeout: 300000
  
});
