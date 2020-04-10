'use strict';
const config = require('./config');

module.exports = (sequelize, DataTypes) => {
    const Adventure = sequelize.define(config.adventure.model, {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'http://miraplane-task-2019.surge.sh/images/default.jpg'
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true
        },
        firstSceneId: {
            allowNull: true,
            type: DataTypes.INTEGER,
            references: {
                model: config.scene.model,
                key: 'id'
            }
        }
    });
    Adventure.associate = function(models) {
        Adventure.belongsToMany(models.Hashtag, {
            through: models.AdventureHashtag,
            foreignKey: config.adventure.foreignKey.belongsToManyToHashtag,
            as: 'hashtags'
        });
    };
    return Adventure;
};
