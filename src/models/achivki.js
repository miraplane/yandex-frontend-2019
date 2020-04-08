'use strict';
const achivki = require('./config').achivki;

module.exports = (sequelize, DataTypes) => {
    const Achivki = sequelize.define(achivki.model, {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Achivki.associate = function(models) {
        Achivki.belongsToMany(models.Scene, {
            through: models.SceneAchivki,
            foreignKey: achivki.foreignKey.belongsToManyToScene,
            as: 'scenes'
        });
    };
    return Achivki;
};
