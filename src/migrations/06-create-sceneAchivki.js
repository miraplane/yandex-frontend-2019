'use strict';
const congig = require("../models/config");

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable(congig.sceneAchivki.db, {
            sceneId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            achivkiId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true
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
        return queryInterface.dropTable(congig.sceneAchivki.db);
    }
};
