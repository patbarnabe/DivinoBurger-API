/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Orders', [
    {
      user_id: 1,
      cliente_name: 'example-name',
      table: 2,
      status: 'pending',
      processedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      cliente_name: 'other-name',
      table: 5,
      status: 'done',
      processedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
