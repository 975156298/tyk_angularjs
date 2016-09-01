/**
 * Created by lenovo on 16-8-30.
 */
app.factory('GetApp',function($rootScope){
    var getApp = function(cb){
        var query = new AV.Query('App');
        query.equalTo('number',1);
         query.find().then(function (results) {
             $rootScope.$apply(cb(results))
            console.log(results);
        },function(error){
            alert('err')
        })
    };
    return getApp;
});

/*app.factory('DeLu',function(){               //存取数据
    var hh = function(username,password){
        var kk = AV.Object.extend("kk");
        var k = new kk();
        k.set('username',username);
        k.set('password',password);
        k.set('finsh',true);
        k.save().then(function(data){
        },function(error){
            alert("err")
        })
    }
    return hh;
});*/

app.factory('UpdateApp',function(){
    var updateInfo = function(appId){
        console.log(appId);
        var status=['init','submitted','success','resubmitted']
        var app = AV.Object.createWithoutData('App', appId);
        app.set('status',status[1]);
        app.save();
    };
    return updateInfo;
});

app.service('AdminLogin',function($location,$rootScope){
    var adminLogin = function(username,password){
         AV.User.logIn(username,password).then(function (loginedUser) {
            $rootScope.$apply(function(){
                $location.path('/getApp');
                $location.replace()
            });
        },function (error) {
            alert('err')
        });
    };
    return adminLogin;
})
