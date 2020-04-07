'use strict';

const Scene = require('../models').Scene;
const currentDate = new Date();

module.exports = () => Scene.bulkCreate([
    {
        content: 'Древнее зло пробудилось. Оно уничтожает города один за другим. Горстка выживших просят вас о помощи. Готовы ли вы бросить ему вызов?',
        contentPosition: 'leftBottom',
        img: 'evil.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Вы убежали и остались целы. Мудрый поступок!',
        contentPosition: 'leftTop',
        img: 'run.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Выберите заклинание',
        contentPosition: 'rightBottom',
        img: 'book.png',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Начинается бой...',
        contentPosition: 'rightBottom',
        img: 'Jace.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Вы храбро сражались. До самой смерти.',
        contentPosition: 'leftTop',
        img: 'dead.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Первым из героев был волшебник Амадей. Вторым был рыцарь Понтий, бесстрашный защитник королевства. И, наконец, Зоя, таинственная фигура.',
        contentPosition: 'leftTop',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'threeHeroes.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    }

    ]);
