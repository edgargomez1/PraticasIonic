angular.module('starter', ['ionic', 'ionic.contrib.frostedGlass'])

.controller('PageCtrl', function($scope, $ionicFrostedDelegate, $ionicScrollDelegate, $rootScope) {
  var messageOptions = [
	{ content: '<p>HOLA MUNDO</p>'},
	{ content: '<p>Holi Beto</p>'},
	{ content: '<p>HOLA MUNDO</p>'},
	{ content: '<p>HOLA GUAPO</p>'},
	{ content: '<p>HOLA Beto</p>'}
	];
 
  var messageIter = 0;
  $scope.messages = messageOptions.slice(0, messageOptions.length);

  $scope.add = function() {
    var nextMessage = messageOptions[messageIter++ % messageOptions.length];
    $scope.messages.push(angular.extend({}, nextMessage));

    // Update the scroll area and tell the frosted glass to redraw itself
    $ionicFrostedDelegate.update();
    $ionicScrollDelegate.scrollBottom(true);
  };
});