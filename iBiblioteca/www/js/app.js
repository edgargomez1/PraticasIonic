// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','MainController','AuthorController','CurriculumController','BibliotecaController','BookController'])

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

.config(function($urlRouterProvider,$stateProvider){

      $stateProvider  
      .state('main',{
        url:'/main',
        templateUrl:'templates/main.html',
        controller:'HomeCtrl'
      })
      .state('acceso',{
        url:'/acceso',
        templateUrl:'templates/ibiblioteca.html',
        controller:'ibibliotecaCtrl'
      })
      .state('consulta',{
        url:'/consulta',
        templateUrl:'templates/author.html',
        controller:'authorCtrl'
      })
      .state('curriculum',{
        url:'/curriculum',
        templateUrl:'templates/curriculum.html',
        controller:'curriculumCtrl'
      })
      .state('bookDetail',{
        url:'/book/:id',
        templateUrl:'templates/book.html',
        controller:'bookCtrl'
      })

      $urlRouterProvider.otherwise('main');
})
.factory('bookService', function() {     
var books = [       
      { title: 'El Alquimista', year: '1900', author: 'Pablito clavo un clavito',isbn: '92837498HAS', editorial: 'Clavito', cover: 'https://http2.mlstatic.com/coleccion-de-16-e-book-de-paulo-coelho-libros-famosos-D_NQ_NP_856201-MLV20287720041_042015-O.jpg' }, 
      { title: 'Codigo Da Vinci', year: '1500', author: 'Mona LISA',          isbn: '12873663HF', editorial: 'Roma', cover: "http://www.quelibroleo.com/noticias/wp-content/uploads/2012/04/El-c%C3%B3digo-Da-Vinci.jpg" },       
      { title: 'El ingenioso hidalgo don Quijote de la Mancha', year: '1605',          author: 'Miguel de Cervantes Saavedra',          isbn: '918273987HABS', editorial: 'Anaya', cover: "http://st-listas.20minutos.es/images/2011-09/302264/3167685_249px.jpg?1315868029" },       
      { title: 'La piedra filosofal', year: '2000', author: 'Harry Popotitos',          isbn: '9182739874', editorial: 'Poter', cover: "https://s-media-cache-ak0.pinimg.com/236x/fc/03/6f/fc036f7b34e2fa9a5458dfee03b1061f.jpg" },       
      { title: 'El retrato', year: '3000', author: 'Dorian Gray',          isbn: '98374 A S S', editorial: 'Retratados', cover: "http://st-listas.20minutos.es/images/2012-04/328208/3497027_640px.jpg?1335183518" },
      { title: 'Dr. Jerkyll', year: '1850', author: 'Mr. Hyde',          isbn: '4387563JJJJ', editorial: 'Monstruos', cover: "http://diariode3.com/wp-content/uploads/2011/09/ldro001.jpg" },
      { title: 'El diario', year: '1689', author: 'Anna Frank',          isbn: '23847HASHJ', editorial: 'Ana', cover: "http://st-listas.20minutos.es/images/2011-09/302264/3169987_249px.jpg?1315868029" }     
      ];      
  return {         
    getBooks: function() {             
      return books;         
    },         
    getBook: function(id) {             
      return books[id];         
    },     
  } 
});

