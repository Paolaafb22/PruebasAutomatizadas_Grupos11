module.exports = {
  projectId: 'TSDL-Monkey-with-cypress',
  env: {
    appName: 'App prueba',
    events: 200,
    delay: 600,
    seed: 5129,
    pctClicks: 12,
    pctScroll: 12,
    pctSelectors: 12,
    pctKeys: 12,
    pctSpKeys: 12,
    pctPgNav: 12,
    pctBwChaos:12,
    pctActions:16
  },
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 120000,
  videosFolder: './results',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:2368/',
    specPattern: './cypress/integration/monkey/smart-monkey.js',
  },
}
