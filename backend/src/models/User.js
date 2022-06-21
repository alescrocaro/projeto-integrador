'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, {
        onDelete: 'CASCADE',
        hooks: true
      })
      User.hasMany(models.Comment, {
        onDelete: 'CASCADE',
        hooks: true
      })
      User.hasMany(models.Contestation, {
        onDelete: 'CASCADE',
        hooks: true
      })
    }
  } 
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    bio: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'User',
});

  return User;
};
