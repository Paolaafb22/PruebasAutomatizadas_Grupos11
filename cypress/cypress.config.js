module.exports = {
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    baseUrl: 'http://localhost:2368/ghost/',
    email: 'mr.gomezc1@uniandes.edu.co',
    passwd: 'mr.gomezc1',
    TAG_name: 'kraken-tag',
    // set API Mockaroo
    keyMockaroo: "c6e15b60",
    rowsMockaroo: "10",
    schemaMockaroo: "Users"
  },
};

// ambiente ghost 5.18.0:        'http://localhost:2368/ghost/'
// ambiente ghost 3.42.9 docker: 'http://192.168.0.10:3001/ghost/'
