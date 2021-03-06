'use strict';
const congig = require("../models/config");

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable(congig.scene.db, {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            content: {
                allowNull: true,
                type: Sequelize.STRING
            },
            contentPosition: {
                allowNull: true,
                type: Sequelize.STRING
            },
            img: {
                allowNull: true,
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
        return queryInterface.dropTable(congig.scene.db);
    }
};
