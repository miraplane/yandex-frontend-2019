'use strict';
const config = require("../models/config");

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable(config.achivki.db, {
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
                allowNull: false,
                type: Sequelize.STRING
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
        return queryInterface.dropTable(config.achivki.db);
    }
};
