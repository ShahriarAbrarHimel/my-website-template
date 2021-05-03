(function ($) {

  "use strict";

  //parallax JS
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);

  //slick JS
  $('.client-logo-carosel').slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 300,
    rows: 2,
    slidesToShow: 6,
    slidesToScroll: 4,
    prevArrow: ".prev-client",
    nextArrow: ".next-client",
    dotsClass: "dots-clients",
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //slick JS
  $('.news-carosel').slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev-news",
    nextArrow: ".next-news",
    dotsClass: "dots-news",
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  //slick JS
  $('.traffic-carosel').slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".prev-traffic",
    nextArrow: ".next-traffic",
    dotsClass: "dots-traffic",
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });










})(jQuery);