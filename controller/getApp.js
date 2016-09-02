/**
 * Created by lenovo on 16-8-30.
 */
app.controller('getApp', function ($scope,GetApp,UpdateApp) {
    $scope.getApp = function(){
        GetApp(function(data){
            var rows = 2;
            var shuju = data;
            $scope.pages = Math.ceil(shuju.length/rows);
            $scope.page = 1;
            if($scope.page==1){
                var getApp=[];
                for(var i=0;i<rows;i++){
                    if(shuju.length<i+1) break;
                    getApp.push(shuju[i]);
                }
                $scope.title = getApp;
            }
            $scope.selectPage = function(page){
                var getApp=[];
                for(var i=0;i<rows;i++){
                    if(shuju.length<i) break;
                    getApp.push(shuju[(page-1)*rows+i]);
                }
                $scope.title = getApp;
                console.log("选择的页："+page);
            };
        });
    };
    $scope.updateApp = function(id,status){
        UpdateApp(id,status);
    }
});