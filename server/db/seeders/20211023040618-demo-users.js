/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

require('dotenv').config();

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      name: 'example-hall',
      email: 'hall@divinoburger.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'hall',
      restaurant: 'Divino Burger',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'example-kitchen',
      email: 'kitchen@divinoburger.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'kitchen',
      restaurant: 'Divino Burger',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
