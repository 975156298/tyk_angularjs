/**
 * Created by lenovo on 16-8-30.
 */
app.controller('login',function($scope,AdminLogin){
    $scope.Login= function(){
        var username = $scope.username;
        var password = $scope.password;
       AdminLogin(username,password);
    };
});


