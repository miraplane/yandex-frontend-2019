'use strict';

const AdventureHashtag = require('../models').AdventureHashtag;
const currentDate = new Date();

module.exports = () => AdventureHashtag.bulkCreate([
    {
        adventureId: 1,
        hashtagId: 1,
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
        adventureId: 6,
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
        adventureId: 2,
        hashtagId: 2,
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
        adventureId: 8,
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
        hashtagId: 3,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 3,
        hashtagId: 3,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 4,
        hashtagId: 3,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 5,
        hashtagId: 4,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 11,
        hashtagId: 4,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 4,
        hashtagId: 5,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 5,
        hashtagId: 5,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 6,
        hashtagId: 5,
        createdAt: currentDate,
        updatedAt: currentDate
    },{
        adventureId: 9,
        hashtagId: 5,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 11,
        hashtagId: 5,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 3,
        hashtagId: 6,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 4,
        hashtagId: 6,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 5,
        hashtagId: 6,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 6,
        hashtagId: 6,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 7,
        hashtagId: 6,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 8,
        hashtagId: 6,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 9,
        hashtagId: 6,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        adventureId: 10,
        hashtagId: 6,
        createdAt: currentDate,
        updatedAt: currentDate
    },
]);

