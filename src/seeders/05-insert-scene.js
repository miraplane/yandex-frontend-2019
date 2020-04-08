'use strict';

const Scene = require('../models').Scene;
const currentDate = new Date();

module.exports = () => Scene.bulkCreate([
    {
        content: 'Древнее зло пробудилось. Оно уничтожает города один за другим. Горстка выживших просят вас о помощи. Готовы ли вы бросить ему вызов?',
        contentPosition: 'leftBottom',
        img: 'http://miraplane-task-2019.surge.sh/evil.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Вы убежали и остались целы. Мудрый поступок!',
        contentPosition: 'leftTop',
        img: 'http://miraplane-task-2019.surge.sh/run.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Выберите заклинание',
        contentPosition: 'rightBottom',
        img: 'http://miraplane-task-2019.surge.sh/book.png',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Начинается бой...',
        contentPosition: 'rightBottom',
        img: 'http://miraplane-task-2019.surge.sh/Jace.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Вы храбро сражались. До самой смерти.',
        contentPosition: 'leftTop',
        img: 'http://miraplane-task-2019.surge.sh/dead.jpg',
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
        img: 'http://miraplane-task-2019.surge.sh/threeHeroes.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    }

    ]);
