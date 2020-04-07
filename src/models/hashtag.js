'use strict';

module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', {
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
          through: models.AdventureHashtags,
          foreignKey: 'hashtagId',
          as: 'adventures'
      });
  };
  return Hashtag;
};
