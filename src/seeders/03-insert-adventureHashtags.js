'use strict';

const AdventureHashtags = require('../models').AdventureHashtags;
const currentDate = new Date();

module.exports = () => AdventureHashtags.bulkCreate([
    {
        adventureId: 1,
        hashtagId: 1,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 1,
        hashtagId: 2,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 1,
        hashtagId: 3,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 2,
        hashtagId: 2,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 2,
        hashtagId: 3,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 3,
        hashtagId: 1,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 3,
        hashtagId: 2,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 3,
        hashtagId: 3,
        createdAt: currentDate,
        updatedAt: currentDate
    }
]);

