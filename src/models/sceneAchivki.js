'use strict';
const config = require('./config');

module.exports = (sequelize, DataTypes) => {
    const SceneAchivki = sequelize.define(config.sceneAchivki.model, {
        sceneId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        achivkiId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    });
    SceneAchivki.associate = function(models) {
        SceneAchivki.belongsTo(models.Scene, {
            foreignKey: config.scene.foreignKey.belongsToManyToAchivki
        });
        SceneAchivki.belongsTo(models.Achivki, {
            foreignKey: config.achivki.foreignKey.belongsToManyToScene
        });
    };
    return SceneAchivki;
};
