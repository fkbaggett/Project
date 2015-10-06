namespace MyApp.Controllers {

    class PetsController {
        pets;
        constructor() {
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


        }

    }


    angular.module('PetsApp').controller('PetsController', PetsController);


}