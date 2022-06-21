'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Post);
      Comment.belongsTo(models.User);
      Comment.hasMany(models.Contestation, {
        onDelete: 'CASCADE',
        hooks: true
      })
    }
  }
  Comment.init({
    userName: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    contestation: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });

  return Comment;
};
