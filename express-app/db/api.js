var knex = require('./knex');

module.exports = {

  printUsernames: function() {
    return knex('users').select().first();
  }

};
