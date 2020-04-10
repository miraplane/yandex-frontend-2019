'use strict';

const Achivki = require('../models').Achivki;
const currentDate = new Date();

module.exports = () => Achivki.bulkCreate([
    {
        title: "Мудрец",
        img: "http://miraplane-task-2019.surge.sh/images/magical.jpg",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "YOU DIED",
        img: "http://miraplane-task-2019.surge.sh/images/skeleton.jpg",
        createdAt: currentDate,
        updatedAt: currentDate
    }
]);
