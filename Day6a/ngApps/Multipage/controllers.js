var MultiPage;
(function (MultiPage) {
    var Controllers;
    (function (Controllers) {
        var Page1Controller = (function () {
            function Page1Controller() {
                this.message = 'Main';
            }
            return Page1Controller;
        })();
        angular.module('MultiPageApp').controller('Page1Controller', Page1Controller);
        var Page2Controller = (function () {
            function Page2Controller() {
                this.message = 'Products';
            }
            return Page2Controller;
        })();
        angular.module('MultiPageApp').controller('Page2Controller', Page2Controller);
        var Page3Controller = (function () {
            function Page3Controller() {
                this.message = 'Resources';
            }
            return Page3Controller;
        })();
        angular.module('MultiPageApp').controller('Page3Controller', Page3Controller);
    })(Controllers = MultiPage.Controllers || (MultiPage.Controllers = {}));
})(MultiPage || (MultiPage = {}));
