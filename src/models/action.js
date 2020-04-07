'use strict';
module.exports = (sequelize, DataTypes) => {
    const Action = sequelize.define('Action', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nextSceneId: {
            allowNull: true,
            type: DataTypes.INTEGER,
            references: {
                model: 'Scene',
                key: 'id'
            }
        },
        belongSceneId: {
            allowNull: true,
            type: DataTypes.INTEGER,
            references: {
                model: 'Scene',
                key: 'id'
            }
        }
    });
    return Action;
};
