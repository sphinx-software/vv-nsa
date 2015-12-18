module.exports = function (express, homeController) {
    var router = express.Router();

    router.get('/', homeController.index);

    return router;
};

module.exports['@require']   = ['express', 'http/controller/home'];
module.exports['@singleton'] = true;