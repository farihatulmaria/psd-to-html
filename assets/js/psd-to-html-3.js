(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".product-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    });
    $(".homepage-sliders").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  });
})(jQuery);
