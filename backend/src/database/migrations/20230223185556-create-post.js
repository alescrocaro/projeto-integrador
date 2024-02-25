"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('CREATE EXTENSION postgis;')
    await queryInterface.createTable("Posts", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userName: {
        type: Sequelize.STRING,
      },
      specie: {
        type: Sequelize.STRING,
      },
      genus: {
        type: Sequelize.STRING,
      },
      family: {
        type: Sequelize.STRING,
      },
      order: {
        type: Sequelize.STRING,
      },
      className: {
        type: Sequelize.STRING,
      },
      phylum: {
        type: Sequelize.STRING,
      },
      kingdom: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      weather: {
        type: Sequelize.STRING,
      },
      dateFound: {
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.STRING,
      },
      biome: {
        type: Sequelize.STRING,
      },
      latlng: {
        allowNull: false,
        type: Sequelize.GEOMETRY,
      },
      imgUrl: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        foreignKey: { allowNull: false },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  },
};
