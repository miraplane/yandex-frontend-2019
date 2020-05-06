const models = require('../models');
const Hashtag = models.Hashtag;

module.exports = {
    getByLink(req, res) {
        Hashtag
            .findOne({
                where: {
                    link: req.params.link
                }
            })
            .then(hashtag => res.json(hashtag))
            .catch((error) => res.status(400).send(error));
    }
};
