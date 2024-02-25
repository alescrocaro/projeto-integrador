"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "2fe3820e-af20-4296-b580-d2a12743d6d4",
          name: "Alexandre Scrocaro",
          email: "alexandre@example.com",
          password: "83f7c83dc2f339aad8bcc67a651a2d6350c02d5b1a9ba58d438d5ae5fdc761d4ca7c4576f46bf053f82b219de46016d71fdd5b43063435aa6e04e18b1988370f",
          salt: 10,
          bio: "I love coding",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "9e106156-a63a-4ea3-9d6d-bbf529a4ba82",
          name: "Alexandre Scrocaro Dois",
          email: "alexandre2@example.com",
          password: "83f7c83dc2f339aad8bcc67a651a2d6350c02d5b1a9ba58d438d5ae5fdc761d4ca7c4576f46bf053f82b219de46016d71fdd5b43063435aa6e04e18b1988370f",
          salt: 10,
          bio: "I love coding 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
