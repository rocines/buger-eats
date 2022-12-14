const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wrdzs9",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: 'https://buger-eats-qa.vercel.app'
  },
});
