'use strict';
const congig = require("../models/config");

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable(congig.action.db, {
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
            nextSceneId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            belongSceneId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }),
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(congig.action.db);
    }
};
