flightApp.factory('landingFact', function($http) {
  var getFlightPrices = function(flightInfo) {
    return $http({
      method: 'POST',
      url: 'api/flights/getFlightPrices',
      data: flightInfo
    }).then(function(res) {
      console.log(res.data), function error(response) {
        console.log('error', response);
      });
    };

    return {
      getFlightPrices: getFlightPrices
    };
  });
