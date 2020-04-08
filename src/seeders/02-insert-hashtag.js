'use strict';

const models = require('../models');
const Hashtag = models.Hashtag;
const currentDate = new Date();

module.exports = () => Hashtag.bulkCreate([
    {
        title: 'команда',
        link: 'team',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'фэнтези',
        link: 'fantasy',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'магия',
        link: 'magic',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'котята',
        link: 'kittens',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'мультики',
        link: 'cartoons',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        title: 'три',
        link: 'three',
        createdAt: currentDate,
        updatedAt: currentDate
    }
]);
