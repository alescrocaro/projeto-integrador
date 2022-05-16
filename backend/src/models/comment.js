'use strict';
const {
  Model
} = require('sequelize');
const Post = require('./post');

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    static associate(models) {
      Comments.belongsTo(Post);
      Post.hasMany(Comments);
    }
  }
  Comments.init({
    userName: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Comments',
  });


  return Comments;
};
