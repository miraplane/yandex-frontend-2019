'use strict';

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Adventures', {
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
                defaultValue: 'default.jpg'
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
        return queryInterface.dropTable('Adventures');
    }
};
