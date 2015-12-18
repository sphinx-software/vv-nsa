var HomeController = function () {};

HomeController.prototype.index  = function (request, response) {
    response.send('Hello World from VnValley&trade;');
};

module.exports = function () {
    return new HomeController();
};

module.exports['@singleton'] = true;