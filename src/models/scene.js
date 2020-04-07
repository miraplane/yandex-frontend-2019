'use strict';
module.exports = (sequelize, DataTypes) => {
    const Scene = sequelize.define('Scene', {
        content: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contentPosition: {
            type: DataTypes.STRING,
            allowNull:true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    Scene.associate = function(models) {
        Scene.hasMany(models.Action, {
            foreignKey: 'belongSceneId',
            as: 'actions'
        });
        Scene.belongsToMany(models.Achivki, {
            through: models.SceneAchivki,
            foreignKey: 'sceneId',
            as: 'achivki'
        });
        Scene.hasOne(models.Adventure, {
            foreignKey: 'firstSceneId'
        });
        Scene.hasOne(models.Action, {
            foreignKey: 'nextSceneId'
        })
    };
    return Scene;
};
