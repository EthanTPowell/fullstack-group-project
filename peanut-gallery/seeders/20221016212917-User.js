'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Users', [{
        username: 'TheChefKomatsu',
        password: 'CenturySoup',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
    
  }
};
