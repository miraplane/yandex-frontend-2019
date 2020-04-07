const { Op } = require("sequelize");

const models = require('../models');
const Adventure = models.Adventure;
const Hashtag = models.Hashtag;

const scenesController = require('./scenes');


module.exports = {
    list(req, res) {
        const {meta, staticBasePath, title} = req.locals;

        return Adventure
            .findAll({
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
            .then(adventure => res.render('../views/index', {
                adventures: adventure,
                meta,
                staticBasePath,
                title
            }))
            .catch(error => res.status(400).send(error));
    },

    listByName(req, res) {
        const {meta, staticBasePath, title} = req.locals;
        let adventureId = [];
        let selectHashtag;

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
                selectHashtag = adventure.hashtags[0];
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
            .then(adventure => res.render('../views/index-hashtag', {
                adventures: adventure,
                hashtag: selectHashtag,
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
