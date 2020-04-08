'use strict';
const config = require('./config');

module.exports = (sequelize, DataTypes) => {
    const AdventureHashtag = sequelize.define(config.adventureHashtag.model, {
        adventureId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: config.adventure.model,
                key: 'id'
            }
        },
        hashtagId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: config.hashtag.model,
                key: 'id'
            }
        }
    });
    return AdventureHashtag;
};
