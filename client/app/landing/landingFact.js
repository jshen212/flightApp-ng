// var api = require('./config.js');

flightApp.factory('landingFact', function($http) {

  var getFlightPrices = function(flightInfo) {
    console.log(flightInfo);
    var url = 'http://terminal2.expedia.com:80/x/flights/v3/search/1/' + flightInfo.departCity + '/' + flightInfo.arrivalCity + '/' + flightInfo.departDate + '?apikey=gKs8mfujX4qY5OWe2mqocw6vM2xAIXMO';

    return $http({
      method: 'GET',
      url: url,
    }).success(function(response) {
      console.log(response);
      return response;
    }).error(function(response) {
      console.log('error: ' + response);
    });
  };

  return {
    getFlightPrices: getFlightPrices
  };
});
