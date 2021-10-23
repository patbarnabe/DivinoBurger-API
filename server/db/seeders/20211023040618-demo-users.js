/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      name: 'example-hall',
      email: 'hall@divinoburger.com',
      password: '123456',
      role: 'hall',
      restaurant: 'Divino Burger',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'example-kitchen',
      email: 'kitchen@divinoburger.com',
      password: '123456',
      role: 'kitchen',
      restaurant: 'Divino Burger',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
