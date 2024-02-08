const { defineConfig } = require("cypress");

module.exports = defineConfig({
    chromeWebSecurity: false,
    chromeHeadless: false,
    pageLoadTimeout: 90000,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
    charts: true,
    reportPageTitle: 'Coppel Digital',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportFilename: 'Coppel Digital',
  },
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
