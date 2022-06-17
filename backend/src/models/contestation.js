'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contestation extends Model {
    static associate(models) {
        Contestation.belongsTo(models.Comment);
        Contestation.belongsTo(models.User);
    }
  }
  Contestation.init({
    id:{ 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Contestation',
  });

  return Contestation;
};
