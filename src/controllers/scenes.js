const models = require('../models');
const Scene = models.Scene;
const Action = models.Action;
const Achivki = models.Achivki;

let startSceneId;

module.exports = {
    setStartSceneId(id) {
        startSceneId = id;
    },

    sceneById(req, res, sceneId) {
        Scene
            .findAll({
                where: {
                    id: sceneId
                },
                include: [
                    {
                        model: Action,
                        as: 'actions'
                    },
                    {
                        model: Achivki,
                        as: 'achivki'
                    }]
            })
            .then(scene => res.json(scene[0]))
            .catch((error) => res.status(400).send(error));
    },

    getStartScene(req, res) {
        module.exports.sceneById(req, res, startSceneId);
    },

    nextScene(req, res) {
        module.exports.sceneById(req, res, req.params.sceneId);
    }
};
