'use strict';
module.exports = (sequelize, DataTypes) => {
    const SceneAchivki = sequelize.define('SceneAchivki', {
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
        SceneAchivki.belongsTo(models.Scene, {foreignKey: 'sceneId'});
        SceneAchivki.belongsTo(models.Achivki, {foreignKey: 'achivkiId'});
    };
    return SceneAchivki;
};
