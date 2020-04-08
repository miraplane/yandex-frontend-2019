'use strict';
const config = require('./config');

module.exports = (sequelize, DataTypes) => {
    const Action = sequelize.define(config.action.model, {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nextSceneId: {
            allowNull: true,
            type: DataTypes.INTEGER,
            references: {
                model: config.scene.model,
                key: 'id'
            }
        },
        belongSceneId: {
            allowNull: true,
            type: DataTypes.INTEGER,
            references: {
                model: config.scene.model,
                key: 'id'
            }
        }
    });
    return Action;
};
