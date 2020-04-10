
const controllers = require('../controllers');
const adventuresController = controllers.adventures;
const scenesController = controllers.scenes;

module.exports = (app) => {
    app.get('/', (req, res) => res.render('../views/index', req.locals));
    app.get('/adventures', (req, res) => res.render('../views/index', req.locals));

    app.get('/api',  adventuresController.list);
    app.get('/api/adventures', adventuresController.list);
    app.get('/api/adventures/:name', adventuresController.listByName);
    app.get('/api/adventures/start/:adventureId', adventuresController.start);

    app.get('/api/scene/:sceneId', scenesController.nextScene);


    app.all('*', (req, res) => res.sendStatus(404));
};
