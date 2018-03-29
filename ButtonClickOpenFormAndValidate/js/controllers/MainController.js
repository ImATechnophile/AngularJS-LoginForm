app.controller("modalAccountFormController", ['$scope', '$modal', '$log',
    function ($scope, $modal, $log) {
        $scope.showForm = function () {
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);
            var modalInstance = $modal.open({
                templateUrl: 'modal-form.html',
                controller: ModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    userForm: function () {
                        return $scope.userForm;
                    }
                }
            });
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
            }]);
var ModalInstanceCtrl = function ($scope, $modalInstance, userForm) {
    $scope.pretag=true;
    $scope.list=[];
    $scope.list1=[];
    $scope.form = {};
    $scope.jsonButton=true;
    $scope.DisableFlag=true;
    $scope.AddEvent=0;
    $scope.submitForm = function () {
        if ($scope.form.userForm.$valid) {
            $scope.list.push({
                'Id':$scope.list.length+1,
                'Name':$scope.form.userForm.name.$modelValue,
                'Username':$scope.form.userForm.username.$modelValue,
                'Email':$scope.form.userForm.email.$modelValue,
                'IsChecked':false});
            $scope.DisableFlag=false;
            $scope.AddEvent +=1;
            console.log('user form is in scope');
        } else {
            console.log('userform is not in scope');
        }
    };
    $scope.show=function () {
        $scope.Boolean=true;
        $scope.CustomerList = $scope.list;
        $scope.DisableFlag=true;
    };
    $scope.checkBoxChange=function(currentrow)
    {
        if(currentrow.IsChecked==true)
        {
            // your code here
            $scope.list1.push({'id':currentrow.Id,'name':currentrow.Name,'username':currentrow.Username,'email':currentrow.Email});
        }
        else
        {
            console.log($scope.list1);

            angular.forEach($scope.list1,function(value,key){
                angular.forEach(value,function(v1,k1){
                    console.log(key+":"+value);
                    console.log(k1+":"+v1);
                    if(currentrow.Id==v1) {
                        $scope.list1.splice(key, 1);
                        console.log($scope.list1);
                    }
                });
            });
           
        }
        if($scope.list1.length > 0){
            $scope.jsonButton=false;
        }
        else {
            $scope.jsonButton=true;
        }

    };
    $scope.JsonView = function () {
        $scope.pretag=false;
        $scope.Boolean1=true;
        $scope.list1;
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');

    }
};