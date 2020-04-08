'use strict';

const Adventure = require('../models').Adventure;
const currentDate = new Date();

module.exports = () => Adventure.bulkCreate([
    {
        title: "Эпичный квест",
        img: "http://miraplane-task-2019.surge.sh/epic-cvest.jpg",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "Приключение мага",
        img: "http://miraplane-task-2019.surge.sh/jodah.jpg",
        content: "Древнее Зло вновь набирается сил... Грядет новая битва. Вы – единственная надежда выстоять в финальной битве с темными силами.",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "Три героя",
        content: "Первым из героев был волшебник... Перед героями стоит задача прогнать гоблинов из сказачного леса и освободить будущую королеву от чар свей сестры.",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "Три злодея",
        img: "http://miraplane-task-2019.surge.sh/trix.jpg",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "Три кота",
        img: "http://miraplane-task-2019.surge.sh/cats.jpg",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "Три богатыря",
        img: "http://miraplane-task-2019.surge.sh/ADI.jpg",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "Three hours later...",
        img: "http://miraplane-task-2019.surge.sh/threeHoursLater.jpg",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "Three Kingdoms",
        img: "http://miraplane-task-2019.surge.sh/threeKingdoms.jpg",
        content: "Romance of The Three Kingdoms. Total War.",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "Три поросенка",
        img: "http://miraplane-task-2019.surge.sh/pigs.jpeg",
        content: "Жили-были на свете три поросенка...",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "Три дороги",
        img: "http://miraplane-task-2019.surge.sh/roads.png",
        content: "А какой путь выберете вы?",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "Котенок по имени Гав",
        img: "http://miraplane-task-2019.surge.sh/gavcat.jpg",
        content: "Помогите котенку спрятать котлетку",
        createdAt: currentDate,
        updatedAt: currentDate
    },
]);

