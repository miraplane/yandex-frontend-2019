const { Op } = require("sequelize");

const models = require('../models');
const Adventure = models.Adventure;
const Hashtag = models.Hashtag;

const scenesController = require('./scenes');

const batchSize = 5;

module.exports = {
    list(req, res) {
        const {meta, staticBasePath, title} = req.locals;

        return Adventure
            .findAll({
                offset: req.query.offset,
                limit: batchSize,
                where: {
                    firstSceneId: { [Op.ne]: null }
                },
                order: [
                    ['title', 'DESC']
                ],
                include: [{
                    model: Hashtag,
                    as: 'hashtags'
                }],
            })
            .then(adventure => res.status(200).send({
                adventures: adventure,
                meta: meta,
                staticBasePath: staticBasePath,
                title: title
            }))
            .catch(error => res.status(400).send(error));
    },

    listByName(req, res) {
        const {meta, staticBasePath, title} = req.locals;
        let adventureId = [];

        return Adventure
            .findAll({
                include: [{
                    model: Hashtag,
                    as: 'hashtags',
                    where: {
                        link: req.params.name
                    },
                    required: true
                }]
            })
            .each(adventure => {
                adventureId.push(adventure.id);
            })
            .then(() => {
                return Adventure
                    .findAll({
                        where: {
                            id: { [Op.in]: adventureId },
                            firstSceneId: { [Op.ne]: null }
                        },
                        order: [
                            ['title', 'DESC']
                        ],
                        include: [{
                            model: Hashtag,
                            as: 'hashtags'
                        }],
                    })
            })
            .then(adventure => res.status(200).send({
                adventures: adventure,
                meta,
                staticBasePath,
                title
            }))
            .catch(error => res.status(400).send(error));
    },

    start(req, res) {
        return Adventure
            .findOne({
                where: {
                    id: req.params.adventureId
                }
            })
            .then(adventure => {
                scenesController.setStartSceneId(adventure.firstSceneId);
                return scenesController.sceneById(req, res, adventure.firstSceneId);
                }
            )
    },
};
