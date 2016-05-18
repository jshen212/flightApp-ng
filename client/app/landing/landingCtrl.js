flightApp.controller('landingCtrl', function($scope, $state, landingFact) {

  $scope.sendFlightInfo = function() {
    var Tindex = moment($scope.flightInfo.departDate).toISOString().indexOf('T');
    var departDate = moment($scope.flightInfo.departDate).toISOString();
    departDate = departDate.slice(0, Tindex);
    var departCity = $scope.flightInfo.departCity;
    var arrivalCity = $scope.flightInfo.arrivalCity;

    var flightInfo = {
      departDate: departDate,
      departCity: departCity,
      arrivalCity: arrivalCity
    }

    $scope.flightPrices = landingFact.getFlightPrices(flightInfo).recommended.trends;

  };



});
