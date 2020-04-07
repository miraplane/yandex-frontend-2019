'use strict';

const Adventure = require('../models').Adventure;
const currentDate = new Date();

module.exports = () => Adventure.bulkCreate([
    {
        title: "Эпичный квест",
        img: "epic-cvest.jpg",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "Приключение мага",
        img: "jodah.jpg",
        content: "Древнее Зло вновь набирается сил... Грядет новая битва. Вы – единственная надежда выстоять в финальной битве с темными силами.",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "Три героя",
        content: "Первым из героев был волшебник... Перед героями стоит задача прогнать гоблинов из сказачного леса и освободить будущую королеву от чар свей сестры.",
        createdAt: currentDate,
        updatedAt: currentDate
    }
]);

