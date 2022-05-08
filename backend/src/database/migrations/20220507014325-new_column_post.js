'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return Promise.all([

      queryInterface.addColumn('Posts',  'title',
        Sequelize.STRING
      ),
      queryInterface.addColumn('Posts',  'biome',
      Sequelize.STRING
      ),
      queryInterface.addColumn('Posts',  'imgUrl',
      Sequelize.STRING)


    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
