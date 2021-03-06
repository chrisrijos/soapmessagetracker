(function() {
  angular
    .module('App')
    .controller('HomeController', MainController);

    MainController.$inject = ["$scope", "$rootScope","$location", "$http", "$timeout"];

    function MainController($scope, $rootScope, $location, $http, $timeout) {
        var HomeController = this;
        HomeController.components = [];

        HomeController.unitTest = false;
        HomeController.build = false;
        HomeController.QA = false;
        HomeController.packaging = false;
        HomeController.change = "";

        HomeController.components = HomeController.components;

        HomeController.reload = function() {
          $http.get('/SoftwareComponents/showall').then(function (data) {
              HomeController.data = data["data"];

              HomeController.data.forEach(function (obj) {
                  HomeController.components.push(obj);
              });
          });
        };

        console.log($rootScope.currentUser);

        HomeController.reload();

        HomeController.showNotes = function() {
            $('#componentDetail').modal('show');
        }

       HomeController.column = '';
       HomeController.reverse = false;

       HomeController.resetColumn = function(col) {
         HomeController.column = col;
             if(HomeController.column == col) {
               HomeController.column = "";
             }
       };

       HomeController.sortColumn = function(col){

         HomeController.column = col;

            if(HomeController.reverse){
              HomeController.reverse = false;
              HomeController.reverseclass = 'arrow-up';
            }
            else {
              HomeController.reverse = true;
              HomeController.reverseclass = 'arrow-down';
            }
        };

       HomeController.sortClass = function(col){
         if(HomeController.column == col ){
            if(HomeController.reverse){
                return 'arrow-down';
              }
              else{
                return 'arrow-up';
              }
            }
              else{
                return '';
              }
          }

        HomeController.falsify = function() {
            if ($rootScope.currentUser.email == 'group4@group4.com') {
                return true;
            } else {
                return false;
            }
        }


        HomeController.navigateToDashboard = function() {
            $location.path('/admindashboard');
        }
    };

})();
