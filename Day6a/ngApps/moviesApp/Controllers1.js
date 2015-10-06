var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var PetsController = (function () {
            function PetsController() {
                this.pets = [
                    {
                        type: 'dog', animals: [
                            { name: 'Fido', imgUrl: "http://newsliteimgs.s3.amazonaws.com/091006_churchill.jpg" },
                            { name: 'Fifi', imgUrl: "http://i3.cpcache.com/product_zoom/365497592/baby_bunny_easter_greeting_card.jpg?height=250&width=250&padToSquare=true" },
                        ]
                    },
                    {
                        type: 'bunnies', animals: [
                            { name: 'Fido', imgUrl: "http://newsliteimgs.s3.amazonaws.com/091006_churchill.jpg" },
                            { name: 'Fifi', imgUrl: "http://i3.cpcache.com/product_zoom/365497592/baby_bunny_easter_greeting_card.jpg?height=250&width=250&padToSquare=true" },
                        ]
                    }];
            }
            PetsController.prototype.module = ;
            PetsController.prototype.controller = ;
            ;
            return PetsController;
        })();
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
