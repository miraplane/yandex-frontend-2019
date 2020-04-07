'use strict';

const SceneAchivki = require('../models').SceneAchivki;
const currentDate = new Date();

module.exports = () => SceneAchivki.bulkCreate([
    {
        sceneId: 2,
        achivkiId: 1,
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        sceneId: 5,
        achivkiId: 2,
        createdAt: currentDate,
        updatedAt: currentDate
    }
]);
