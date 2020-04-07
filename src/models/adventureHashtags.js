'use strict';
module.exports = (sequelize, DataTypes) => {
    const AdventureHashtags = sequelize.define('AdventureHashtags', {
        adventureId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Adventure',
                key: 'id'
            }
        },
        hashtagId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Hashtag',
                key: 'id'
            }
        }
    });
    return AdventureHashtags;
};
