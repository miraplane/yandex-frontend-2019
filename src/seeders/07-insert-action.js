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
    {
        title: 'Учится',
        nextSceneId: 9,
        belongSceneId: 8,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Напакостить',
        nextSceneId: 10,
        belongSceneId: 8,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Остаться дома',
        nextSceneId: 12,
        belongSceneId: 11,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'За моря',
        nextSceneId: 14,
        belongSceneId: 13,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'На море',
        nextSceneId: 15,
        belongSceneId: 13,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Солома',
        nextSceneId: 19,
        belongSceneId: 18,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Ветки',
        nextSceneId: 20,
        belongSceneId: 18,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Кирпич',
        nextSceneId: 21,
        belongSceneId: 18,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'STAY HOME',
        nextSceneId: 23,
        belongSceneId: 22,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Съесть',
        nextSceneId: 25,
        belongSceneId: 24,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'Спрятать',
        nextSceneId: 25,
        belongSceneId: 24,
        createdAt: currentDate,
        updatedAt: currentDate
    },
]);
