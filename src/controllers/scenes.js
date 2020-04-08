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
        const {meta, staticBasePath, title} = req.locals;

        return Scene
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
            .then(scene => res.render('../views/index-scene', {
                scene: scene[0],
                firstSceneId: startSceneId,
                meta,
                staticBasePath,
                title
            }))
            .catch((error) => res.status(400).send(error));
    },

    nextScene(req, res) {
        module.exports.sceneById(req, res, req.params.sceneId);
    }
};
