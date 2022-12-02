module.exports = {
  projectId: 'TSDL-Monkey-with-cypress',
  env: {
    'appName': 'App prueba',
    'events': 50,
    'delay': 300,
    'seed': 7314,
    'pctClicks': 19,
    'pctScroll': 17,
    'pctSelectors': 16,
    'pctKeys': 16,
    'pctSpKeys': 16,
    'pctPgNav': 16,
  },
  'pageLoadTimeout': 120000,
  'defaultCommandTimeout': 120000,
  'videosFolder': './results',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:2368/ghost',
    specPattern: './cypress/integration/monkey/monkey.js',
  },
}
