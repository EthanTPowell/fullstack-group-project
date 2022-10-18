'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Comments', [{
      userID: 1,
      commentBody: "I'm tired of recipes that tell me to save some pasta water. I have 16 jars of it under my bed. When is this investment gonna pay off?" ,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {

 await queryInterface.bulkDelete('Comments', null, {});

  }
};
