'use strict';
const config = require('../models/config');

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable(config.adventure.db, {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING
            },
            img: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'http://miraplane-task-2019.surge.sh/images/default.jpg'
            },
            content: {
                type: Sequelize.STRING,
                allowNull: true
            },
            firstSceneId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }),
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(config.adventure.db);
    }
};
