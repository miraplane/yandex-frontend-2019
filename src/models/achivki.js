'use strict';
module.exports = (sequelize, DataTypes) => {
    const Achivki = sequelize.define('Achivki', {
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
            foreignKey: 'achivkiId',
            as: 'scenes'
        });
    };
    return Achivki;
};
