'use strict';

const Adventure = require('../models').Adventure;

module.exports = () => {
    Adventure.update(
        {
            firstSceneId: 1,
        },
        {
            where: {id: 2},
            fields: ['firstSceneId']
        });

    Adventure.update(
        {
            firstSceneId: 6,
        },
        {
            where: {id: 3},
            fields: ['firstSceneId']
        });
};
