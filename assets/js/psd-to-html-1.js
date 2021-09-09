(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".product-slider").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
    });
    $(".comment-slider").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  });
})(jQuery);