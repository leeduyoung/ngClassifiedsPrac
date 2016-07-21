(function() {
    
    "use strict";

    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope) {

            $scope.classified = {
                title : "First Item",
                price : "$1,000,000",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro necessitatibus beatae sunt vel vero ipsam esse! In, fuga. Sapiente ratione sed delectus eos, reprehenderit cupiditate quo ut quasi? Excepturi, dicta."
            }
        });

})();