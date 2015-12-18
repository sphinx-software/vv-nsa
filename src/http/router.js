module.exports = function (express) {
    var router = express.Router();

    router.get('/', function (request, response) {
        response.send('Hello World');
    });

    return router;
};

module.exports['@require']   = ['express'];
module.exports['@singleton'] = true;