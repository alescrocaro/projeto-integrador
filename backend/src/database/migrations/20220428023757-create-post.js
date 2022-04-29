'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING
      },
      specie: {
        type: Sequelize.STRING
      },
      genus: {
        type: Sequelize.STRING
      },
      family: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      phylum: {
        type: Sequelize.STRING
      },
      kingdom: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      weather: {
        type: Sequelize.STRING
      },
      dateFound: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};