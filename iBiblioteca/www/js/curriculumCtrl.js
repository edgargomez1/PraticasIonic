angular.module('CurriculumController',[])

.controller('curriculumCtrl',function($scope){
	$scope.works = [     
	{ date: 'Labor de la vida', description: 'Estudiar Para ya no estudiar' },      
	{ date: '2012-2016', description: 'Residente del TEC II' },      
	{ date: '2008-2011', description: 'Estudiante en un rancho llamado CBTIS 158' } 
]; 
})