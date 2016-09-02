/**
 * Created by lenovo on 16-8-30.
 */
app.factory('GetApp',function($rootScope){
    var getApp = function(cb){
        /*var query = new AV.Query('App');
        query.equalTo('number',1);
         query.find().then(function (results) {
             $rootScope.$apply(cb(results))
            console.log(results);
        },function(error){
            alert('err')
        })*/
        AV.Cloud.run('get_check', {number:1}, {
            success: function(data) {
                $rootScope.$apply(cb(data));
            },
            error: function(err) {
                alert('getApp error');
            }
        });
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
    var updateInfo = function(appId,status){
        /*console.log(appId);
        var app = AV.Object.createWithoutData('App', appId);
        app.set('status',status);
        app.save();*/
        console.log(appId);
        var paramsJson = {
            appId:appId,
            status:status
        };
        if(status=='success') {
            AV.Cloud.run('consent_check', paramsJson, {
                success: function (data) {
                    console.log(data);
                },
                error: function (err) {
                    alert('update error');
                }
            });
        }else{
            AV.Cloud.run('no_consent_check', paramsJson, {
                success: function (data) {
                    console.log(data);
                },
                error: function (err) {
                    alert('update error');
                }
            });
        }
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
