'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Users', [
     {
       username: 'account_1',
       lastName: 'Deo',
       firstName: 'John',
       email: 'account_1@email.com',
       password: bcrypt.hashSync('password', 10)
     },
     {
      username: 'account_2',
      lastName: 'Deo',
      firstName: 'Janet',
      email: 'account_2@email.com',
      password: bcrypt.hashSync('password', 10)
     }
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
