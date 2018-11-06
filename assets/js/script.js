//on crée un object qui contient notre module "testApp" au quel on injecte une dépendance "ngRoute"
var form = angular.module('testApp', ['ngRoute']);
form.run(function($rootScope){;
    $rootScope.subjectList = [];
    $rootScope.nameList = [];
    $rootScope.emaiList = [];
    $rootScope.textList = [];
});
    //configuration du routeur
    form.config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/form',{
            templateUrl:'partials/form.html',
            controller:'formCtrl'
        })
        .when('/view/:id?',{
            templateUrl:'partials/view.html',
            controller: 'viewCtrl'
        })
        .otherwise({
            redirectTo:'/form'
        })
    }]);

//on crée un controller rattaché à notre object "form"
form.controller('formCtrl', ['$scope', '$rootScope', function ($scope, $rootScope){
$scope.sendData = function (){
//crée une variable qui sera accessible dans tout le document
    $rootScope.subjectList.push($scope.subject);
    $rootScope.nameList.push($scope.name);
    $rootScope.emailtList.push($scope.email);
    $rootScope.textList.push($scope.text);
    }
}]);
form.controller('viewCtrl',['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){
    $scope.id = $routeParams.id;
    $scope.subject = $rootScope.subjectList[$scope.id];
    $scope.name = $rootScope.nameList[$scope.id];
    $scope.email = $rootScope.emailList[$scope.id];
    $scope.text = $rootScope.textList[$scope.id];
}]);
