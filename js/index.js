$(document).ready(function () {
  var wow = new WOW({
    boxClass: "wow", 
    animateClass: "animated",
    offset: 0, 
    mobile: true, 
    live: true, 
    callback: function (box) {},
    scrollContainer: null, 
    resetAnimation: true,
  });
  if ($('.wow').hasClass('animated')) {
    $(this).removeClass('animated');
    $(this).removeAttr('style');
    new WOW().init();
}
  wow.init();

  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 10,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    touchDrag: false,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        nav: false,
      },
      980: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
  // image-slider-inited


  window.onscroll = function () {
    headerFunction();
  };

  // var header = document.getElementById("header");
  var body = document.body;
  var sticky = body.offsetTop;

  function headerFunction() {
    if (window.pageYOffset > 100) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  }
});

// hamburger-menu
function showMenu() {
  $("body").toggleClass("active");
}

function hideMenu() {
  $("body").removeClass("active");
}
