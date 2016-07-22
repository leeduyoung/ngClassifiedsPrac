(function() {
    
    "use strict";

    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory) {

            // $http.get('data/classifieds.json').then(function(classifieds){
            //     $scope.classifieds = classifieds.data;
            // });

            classifiedsFactory.getClassifieds().then(function(classifieds) {
                $scope.classifieds = classifieds.data;
            });
                        
        });

})();