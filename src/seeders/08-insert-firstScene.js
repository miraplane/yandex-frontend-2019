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

    Adventure.update(
        {
            firstSceneId: 8,
        },
        {
            where: {id: 4},
            fields: ['firstSceneId']
        });

    Adventure.update(
        {
            firstSceneId: 11,
        },
        {
            where: {id: 5},
            fields: ['firstSceneId']
        });

    Adventure.update(
        {
            firstSceneId: 13,
        },
        {
            where: {id: 6},
            fields: ['firstSceneId']
        });

    Adventure.update(
        {
            firstSceneId: 16,
        },
        {
            where: {id: 7},
            fields: ['firstSceneId']
        });

    Adventure.update(
        {
            firstSceneId: 17,
        },
        {
            where: {id: 8},
            fields: ['firstSceneId']
        });

    Adventure.update(
        {
            firstSceneId: 18,
        },
        {
            where: {id: 9},
            fields: ['firstSceneId']
        });

    Adventure.update(
        {
            firstSceneId: 22,
        },
        {
            where: {id: 10},
            fields: ['firstSceneId']
        });

    Adventure.update(
        {
            firstSceneId: 24,
        },
        {
            where: {id: 11},
            fields: ['firstSceneId']
        });
};
