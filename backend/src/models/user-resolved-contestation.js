"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserResolvedContestation extends Model {
    static associate(models) {
      UserResolvedContestation.belongsTo(models.User, {
        foreignKey: "userId",
      });
      UserResolvedContestation.belongsTo(models.Comment, {
        foreignKey: "commentId",
      });
    }
  }
  UserResolvedContestation.init(
    {},
    {
      sequelize,
      modelName: "UserResolvedContestation",
      tableName: "UserResolvedContestation",
    }
  );

  return UserResolvedContestation;
};
