'use strict';

module.exports = (sequelize, DataTypes) => {
    const Adventure = sequelize.define('Adventure', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'default.jpg'
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true
        },
        firstSceneId: {
            allowNull: true,
            type: DataTypes.INTEGER,
            references: {
                model: 'Scene',
                key: 'id'
            }
        }
    });
    Adventure.associate = function(models) {
        Adventure.belongsToMany(models.Hashtag, {
            through: models.AdventureHashtags,
            foreignKey: 'adventureId',
            as: 'hashtags'
        });
    };
    return Adventure;
};
