var app = require('../server.js');
var jsonParser = require('body-parser').json();
var flightController = require('../controllers/flightController.js');

module.exports = function(app, express) {
  app.post('/api/flights/getFlightPrices',jsonParser, flightController.getFlightPrices);
}
