const routes = require('./routes');
const controllers = require('../controllers');
const adventuresController = controllers.adventures;
const scenesController = controllers.scenes;
const hashtagsController = controllers.hashtags;

module.exports = (app) => {
    app.get('/', (req, res) => res.renderPage('/list'));
    app.get(routes.ADVENTURES, (req, res) => res.renderPage('/list'));
    app.get(`${routes.ADVENTURES}/:link`, (req, res) => res.renderPage('/list-hashtag'));
    app.get(`${routes.SCENE}/:command`, (req, res) => res.renderPage('/scene'));

    app.get(routes.API_ADVENTURES, adventuresController.list);
    app.get(`${routes.API_ADVENTURES}/:name`, adventuresController.listByName);
    app.get(`${routes.API_ADVENTURES_START}/:adventureId`, adventuresController.start);

    app.get(`${routes.API_SCENE}/:sceneId`, scenesController.nextScene);
    app.get(routes.API_REPEAT, scenesController.getStartScene);

    app.get(`${routes.API_HASHTAG}/:link`, hashtagsController.getByLink);

    app.all('*', (req, res) => res.sendStatus(404));
};
