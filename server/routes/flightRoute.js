var flightController = require('../controllers/flightController.js');

module.exports = function(app) {
  app.post('/getFlightPrices', flightController.getFlightPrices);
}
