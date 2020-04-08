
const controllers = require('../controllers');
const adventuresController = controllers.adventures;
const scenesController = controllers.scenes;

module.exports = (app) => {
    app.get('/',  adventuresController.list);
    app.get('/adventures', adventuresController.list);
    app.get('/adventures/:name', adventuresController.listByName);
    app.get('/adventures/start/:adventureId', adventuresController.start);

    app.get('/scene/:sceneId', scenesController.nextScene);


    app.all('*', (req, res) => res.sendStatus(404));
};
