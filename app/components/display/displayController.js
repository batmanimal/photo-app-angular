angular.module('display', [])
.controller('displayController', function() {
  var vm = this;
  vm.imageUrl = '';
  vm.caption = '';
  vm.orderCount = 0;
  vm.rating = null;
  vm.selectedPhoto;

  vm.oneStar = false;
  vm.twoStars = false;
  vm.threeStars = false;
  vm.fourStars = false; 

  vm.updatePhoto = function(photo) {
    // clear display 
    vm.resetRatingDisplay();
    vm.selectedPhoto = photo;
    vm.imageUrl = photo.imageUrl;
    vm.caption = photo.caption;
    vm.orderCount = photo.orderCount;
    // if the photo already has a rating, display it 
    if(photo.rating) {
      vm.updateRating(photo.rating);
    } 
  };

  vm.updateRating = function(stars) {
    vm.selectedPhoto.rating = stars;

    if (stars === 1) {
      vm.oneStar = true;
      vm.twoStars = false;
      vm.threeStars = false;
      vm.fourStars = false; 
    }
    if (vm.selectedPhoto.rating === 2) {
      vm.oneStar = false;
      vm.twoStars = true;
      vm.threeStars = false;
      vm.fourStars = false; 
    }
    if (vm.selectedPhoto.rating === 3) {
      vm.oneStar = false;
      vm.twoStars = false;
      vm.threeStars = true;
      vm.fourStars = false; 
    } 
    if (vm.selectedPhoto.rating === 4) {
      vm.oneStar = false;
      vm.twoStars = false;
      vm.threeStars = false;
      vm.fourStars = true; 
    }
  };

  vm.resetRatingDisplay = function() {
    vm.oneStar = false;
    vm.twoStars = false;
    vm.threeStars = false;
    vm.fourStars = false; 
  };

  vm.photoArray = [
    {
      title: "Norway",
      caption: "Low tide at Olstinden by Douglas Stratton",
      rating: null,
      orderCount: 3,
      imageUrl: "https://drscdn.500px.org/photo/81913125/m%3D2048/d6926aeb94599899fc9e76fce241ff94"
    },
    {
    title: "Maui",
    caption: "Makena Cove, Maui. Let's go to the beach!",
    rating: null,
    orderCount: 2,
    imageUrl: "http://assets.fodors.com/destinations/4636/beach-makena-cove-south-shore-maui-maui-hawaii-usa_main.jpg"
    },
    {
    title: "Tufa",
    caption: "Tufa at Night by Romain Guy",
    rating: '',
    orderCount: 3,
    imageUrl: "https://lh3.googleusercontent.com/-YifreVFp77c/UMoTI_wpC6I/AAAAAAAAMRw/6VACc_ubeaU/w2048-h1312/Tufa%2Bat%2BNight.jpg"
    },
    {
      title: "Lost Island",
      caption: "Lost Island, San Gregorio, by Romain Guy",
      rating: '',
      orderCount: 1,
      imageUrl: "https://lh3.googleusercontent.com/-7WqXcxOUVVA/VW1ct0NIx1I/AAAAAAAAQKE/GUcb_c0UAzc/w1719-h1149-no/Lost%2BIsland.jpg"
    },
    {
      title: "Winter Scene",
      caption: "Winter is coming, somewhere",
      rating: '',
      orderCount: 5,
      imageUrl: "http://www.smashingmagazine.com/images/winter-wonderland/temple.jpg"
    }
  ];

});

