"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Post, {
        foreignKey: "postId",
      });
    }
  }
  Image.init(
    {
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Image",
      tableName: "Images",
    }
  );

  return Image;
};
