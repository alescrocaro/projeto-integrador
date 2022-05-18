'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Post);
      models.Post.hasMany(Comment);
    }
  }
  Comment.init({
    userName: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Comment',
  });

  return Comment;
};
