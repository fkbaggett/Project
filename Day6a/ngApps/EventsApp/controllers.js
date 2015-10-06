var EventApps;
(function (EventApps) {
    var Controllers;
    (function (Controllers) {
        var FavoriteColorController = (function () {
            function FavoriteColorController() {
            }
            FavoriteColorController.prototype.addNumbers = function () {
                this.result - this.number1 + this.number2;
            };
            FavoriteColorController.prototype.submitForm = function () {
            };
            return FavoriteColorController;
        })();
        angular.module('EventsApp').controller('FavoriteColorController', FavoriteColorController);
    })(Controllers = EventApps.Controllers || (EventApps.Controllers = {}));
})(EventApps || (EventApps = {}));
