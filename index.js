var dbxrefs = require('./dbxrefs.js');
module.exports = {
  isKnown: function(dbName) {
    return dbxrefs.hasOwnProperty(dbName);
  },
  fetch: function(dbName) {
    return dbxrefs[dbName];
  }
};
