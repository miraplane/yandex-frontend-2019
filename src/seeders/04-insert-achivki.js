'use strict';

const Achivki = require('../models').Achivki;
const currentDate = new Date();

module.exports = () => Achivki.bulkCreate([
    {
        title: "Мудрец",
        img: "magical.jpg",
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: "YOU DIED",
        img: "skeleton.jpg",
        createdAt: currentDate,
        updatedAt: currentDate
    }
]);
