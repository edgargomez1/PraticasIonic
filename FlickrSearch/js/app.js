// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.factory('Flickr', function($resource, $q) {
    var photosPublic = $resource('http://api.flickr.com/services/feeds/photos_public.gne', {
        format: 'json',
        jsoncallback: 'JSON_CALLBACK'
    }, {
        'load': {
            'method': 'JSONP'
        }
    });

    return {
        search: function(query) {
            var q = $q.defer();
            photosPublic.load({
                tags: query
            }, function(resp) {
                q.resolve(resp);
            }, function(err) {
                q.reject(err);
            })

            return q.promise;
        }
    }
})

.controller('FlickrCtrl', function($scope, Flickr) {

    var doSearch = ionic.debounce(function(query) {
        Flickr.search(query).then(function(resp) {
            $scope.photos = resp;
        });
    }, 500);

    $scope.search = function() {
        doSearch($scope.query);
    }

})

.directive('pushSearch', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {
            var amt, st, header;

            $element.bind('scroll', function(e) {
                if (!header) {
                    header = document.getElementById('search-bar');
                }
                st = e.detail.scrollTop;
                if (st < 0) {
                    header.style.webkitTransform = 'translate3d(0, 0px, 0)';
                } else {
                    header.style.webkitTransform = 'translate3d(0, ' + -st + 'px, 0)';
                }
            });
        }
    }
})

.directive('photo', function($window) {
    return {
        restrict: 'C',
        link: function($scope, $element, $attr) {
            var size = ($window.outerWidth / 3) - 2;
            $element.css('width', size + 'px');
        }
    }
});
