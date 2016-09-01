/**
 * Created by lenovo on 16-8-29.
 */
var app = angular.module('ngRouteExample', ['ngRoute']);
app.run(function() {
    var APP_ID = 'iqnghLfOqAtee5Bo1QAgsAC3-gzGzoHsz';
    var APP_KEY = 'KqPheplNC2ctxTW4XJlaXoeJ';
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });
});

app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/getApp',{
        templateUrl : 'getApp.html',
        controller : 'getApp'
    }).when('/login',{
        templateUrl : 'login.html',
        controller : 'login'
    }).otherwise({redirectTo:'/login'})
}]);