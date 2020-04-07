'use strict';
module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('AdventureHashtags', {
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
        return queryInterface.dropTable('AdventureHashtags');
    }
};
