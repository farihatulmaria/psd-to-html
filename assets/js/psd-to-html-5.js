(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".hompage-slider").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    });
  });
})(jQuery);
