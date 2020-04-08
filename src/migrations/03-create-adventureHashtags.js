'use strict';
const config = require('../models/config');

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable(config.adventureHashtag.db, {
            adventureId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            hashtagId: {
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
        return queryInterface.dropTable(config.adventureHashtag.db);
    }
};
