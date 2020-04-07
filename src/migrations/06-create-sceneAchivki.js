'use strict';
module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('SceneAchivkis', {
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
        return queryInterface.dropTable('SceneAchivkis');
    }
};
