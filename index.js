/*
## Welcome to the Zapier example app!

This is a small example, all in one file. You can get a clone and start it
from `zapier init --template=minimal`. You can of course break apart your
example app, no reason to make it a single file. Also, we recommend taking
a look at the automated tests you can do via `zapier test`!
*/

process.env.BASE_URL = process.env.BASE_URL || 'http://57b20fb546b57d1100a3c405.mockapi.io/api';

const recipe = require('./triggers/recipe');

// Now we can roll up all our behaviors in an App.
const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('@zapier/zapier-platform-core').version,

  beforeRequest: [
  ],

  afterResponse: [
  ],

  resources: {
  },

  // If you want your trigger to show up, you better include it here!
  triggers: {
    [recipe.key]: recipe
  },

  // If you want your searches to show up, you better include it here!
  searches: {
  },

  // If you want your writes to show up, you better include it here!
  writes: {
  }
};

// Finally, export the app.
module.exports = App;
