(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".product-slider").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    });
    $(".comment-slider").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 300,
    });
  });
})(jQuery);
