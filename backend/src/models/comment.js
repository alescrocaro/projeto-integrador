"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Post, {
        foreignKey: "postId",
      });
      Comment.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Comment.hasMany(models.UserResolvedContestation, {
        onDelete: "CASCADE",
        hooks: true,
        foreignKey: "commentId",
      });
    }
  }
  Comment.init(
    {
      userName: DataTypes.STRING,
      type: DataTypes.STRING,
      description: DataTypes.STRING,
      resolvedAmount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
      tableName: "Comments",
    }
  );

  return Comment;
};
