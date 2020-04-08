'use strict';

const Action = require('../models').Action;
const currentDate = new Date();

module.exports = () => Action.bulkCreate([
    {
        title: 'Убежать',
        nextSceneId: 2,
        belongSceneId: 1,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Драться',
        nextSceneId: 3,
        belongSceneId: 1,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Передумать',
        nextSceneId: 1,
        belongSceneId: 3,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Фаербол',
        nextSceneId: 4,
        belongSceneId: 3,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Кольцо холода',
        nextSceneId: 4,
        belongSceneId: 3,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Дальше',
        nextSceneId: 5,
        belongSceneId: 4,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Начать',
        nextSceneId: 7,
        belongSceneId: 6,
        createdAt: currentDate,
        updatedAt: currentDate
    },
]);
