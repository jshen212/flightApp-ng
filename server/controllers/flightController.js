var helpers = {
  getFlightPrices: function(req, res, next) {
    // stores flight info in flights table
    var departDate = req.body.departDate;
    var departCity = req.body.departCity;
    var arrivalCity = req.body.arrivalCity;

    // enter info into db

  }

}

module.exports = helpers;
