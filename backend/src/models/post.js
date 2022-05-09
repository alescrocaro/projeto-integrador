'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    title:DataTypes.STRING,
    biome:DataTypes.STRING,
    imgUrl:DataTypes.STRING,
    userName: DataTypes.STRING,
    specie: DataTypes.STRING,
    genus: DataTypes.STRING,
    family: DataTypes.STRING,
    order: DataTypes.STRING,
    className: DataTypes.STRING,
    phylum: DataTypes.STRING,
    kingdom: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    weather: DataTypes.STRING,
    dateFound: DataTypes.DATE,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};