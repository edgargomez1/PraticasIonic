angular.module('BookController',[])

.controller('bookCtrl',function($scope,bookService,$stateParams){

	$scope.articulo = books[$stateParams.id];

})
var books = [       
      { title: 'El Alquimista', year: '1900', author: 'Pablito clavo un clavito',isbn: '92837498HAS', editorial: 'Clavito', cover: 'https://http2.mlstatic.com/coleccion-de-16-e-book-de-paulo-coelho-libros-famosos-D_NQ_NP_856201-MLV20287720041_042015-O.jpg' }, 
      { title: 'Codigo Da Vinci', year: '1500', author: 'Mona LISA',          isbn: '12873663HF', editorial: 'Roma', cover: "http://www.quelibroleo.com/noticias/wp-content/uploads/2012/04/El-c%C3%B3digo-Da-Vinci.jpg" },       
      { title: 'El ingenioso hidalgo don Quijote de la Mancha', year: '1605',          author: 'Miguel de Cervantes Saavedra',          isbn: '918273987HABS', editorial: 'Anaya', cover: "http://st-listas.20minutos.es/images/2011-09/302264/3167685_249px.jpg?1315868029" },       
      { title: 'La piedra filosofal', year: '2000', author: 'Harry Popotitos',          isbn: '9182739874', editorial: 'Poter', cover: "https://s-media-cache-ak0.pinimg.com/236x/fc/03/6f/fc036f7b34e2fa9a5458dfee03b1061f.jpg" },       
	{ title: 'El retrato', year: '3000', author: 'Dorian Gray',          isbn: '98374 A S S', editorial: 'Retratados', cover: "http://st-listas.20minutos.es/images/2012-04/328208/3497027_640px.jpg?1335183518" },
	{ title: 'Dr. Jerkyll', year: '1850', author: 'Mr. Hyde',          isbn: '4387563JJJJ', editorial: 'Monstruos', cover: "http://diariode3.com/wp-content/uploads/2011/09/ldro001.jpg" },
      { title: 'El diario', year: '1689', author: 'Anna Frank',          isbn: '23847HASHJ', editorial: 'Ana', cover: "http://st-listas.20minutos.es/images/2011-09/302264/3169987_249px.jpg?1315868029" }     
      ]; 