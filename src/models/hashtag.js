'use strict';
const hashtag = require('./config').hashtag;

module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(hashtag.model, {
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      link: {
          type: DataTypes.STRING,
          allowNull: false
      }
  });
  Hashtag.associate = function(models) {
      Hashtag.belongsToMany(models.Adventure, {
          through: models.AdventureHashtag,
          foreignKey: hashtag.foreignKey.belongsToManyToAdventure,
          as: 'adventures'
      });
  };
  return Hashtag;
};
