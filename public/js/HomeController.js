(function() {
  angular
    .module('App')
    .controller('HomeController', MainController);

    MainController.$inject = ["$scope", "$location", "MessageService"];

    function MainController($scope, $location, MessageService) {
        var HomeController = this;

        MessageService.getMessages().then(function (d) {
            HomeController.data = d
        });
    };
})();
