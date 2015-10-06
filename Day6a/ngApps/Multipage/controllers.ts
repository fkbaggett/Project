namespace MultiPage.Controllers {

    class Page1Controller {
        message = 'Main';

    }

    angular.module('MultiPageApp').controller('Page1Controller', Page1Controller);

    class Page2Controller {
        message = 'Products';
    }

    angular.module('MultiPageApp').controller('Page2Controller', Page3Controller);

    class Page3Controller {
        message = 'Resources';
    }

    angular.module('MultiPageApp').controller('Page3Controller', Page1Controller);

}