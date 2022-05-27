'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return Promise.all([


      queryInterface.addColumn('Images',  'PostId',
      {
        type: Sequelize.INTEGER,
        references : {
          model : 'Posts',
          key : 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      } 
      ),

    ])
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Images',  'postId')
  }
};
