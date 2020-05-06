const controllers = require('../controllers');
const adventuresController = controllers.adventures;
const scenesController = controllers.scenes;
const hashtagsController = controllers.hashtags;

module.exports = (app) => {
    app.get('/', (req, res) => res.renderPage('/list'));
    app.get('/adventures', (req, res) => res.renderPage('/list'));
    app.get('/adventures/:link', (req, res) => res.renderPage('/list-hashtag'));
    app.get('/scene/:command', (req, res) => res.renderPage('/scene'));

    app.get('/api/adventures', adventuresController.list);
    app.get('/api/adventures/:name', adventuresController.listByName);
    app.get('/api/adventures/start/:adventureId', adventuresController.start);

    app.get('/api/scene/:sceneId', scenesController.nextScene);
    app.get('/api/start-scene', scenesController.getStartScene);

    app.get('/api/hashtag/:link', hashtagsController.getByLink);

    app.all('*', (req, res) => res.sendStatus(404));
};
