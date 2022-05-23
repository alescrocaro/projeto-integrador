'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Comments', {
      fields: ['PostId'],
      type: 'foreign key',
      name: 'comment_post_association',
      references: {
        table: 'Posts',
        field: 'id',
      }
    });
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.removeConstraint('Comments', 'comment_post_association');
  }
};
