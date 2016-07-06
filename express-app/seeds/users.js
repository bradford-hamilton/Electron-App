
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({ first_name: 'Bradford', last_name: 'Lamson-Scribner', email: 'brad@brad.com', username: 'bradford', password: 'bradford' }),
        knex('users').insert({ first_name: 'Lucas', last_name: 'Barbula', email: 'lucas@lucas.com', username: 'lucas', password: 'lucas' }),
        knex('users').insert({ first_name: 'Lucy', last_name: 'Follansbe', email: 'lucy@lucy.com', username: 'lucy', password: 'lucy' })
      ]);
    });
};
