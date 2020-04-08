'use strict';
const scene = require('./config').scene;

module.exports = (sequelize, DataTypes) => {
    const Scene = sequelize.define(scene.model, {
        content: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contentPosition: {
            type: DataTypes.STRING,
            allowNull: true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    Scene.associate = function(models) {
        Scene.hasMany(models.Action, {
            foreignKey: scene.foreignKey.hasManyToAction,
            as: 'actions'
        });
        Scene.belongsToMany(models.Achivki, {
            through: models.SceneAchivki,
            foreignKey: scene.foreignKey.belongsToManyToAchivki,
            as: 'achivki'
        });
        Scene.hasOne(models.Adventure, {
            foreignKey: scene.foreignKey.hasOneToAdventure
        });
        Scene.hasOne(models.Action, {
            foreignKey: scene.foreignKey.hasOneToAction
        })
    };
    return Scene;
};
