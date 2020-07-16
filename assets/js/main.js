/*
Theme Name: Drownz - Drone E-commerce HTML5 Template.
Author: Slidesigma
Author URL: https://www.templatemonster.com/vendors/slidesigmathemes/
Version: 1.0.0
*/
(function($) {
  'use strict';
  $(document).ready(function() {
    $(".delivery-add").click(function() {
      $(".location-picker").toggleClass("open");
      $(".delivery-add").toggleClass("open");
    });
    $("#stepbtn1, #step1, #prev-1").click(function() {
      $("#steppanel1").addClass('active');
      $("#steppanel2, #steppanel3, #steppanel4").removeClass('active');

      $("#stepbtn1").addClass('active');
      $("#step1").addClass('active');

      $("#stepbtn1, #step1").removeClass('done');
      $("#stepbtn2, #stepbtn3, #stepbtn4").removeClass('active done');
      $("#step2, #step3, #step4").removeClass('active done');

      $("#next-2, #next-3, #prev-1, #prev-2, #prev-3, #finish-1").hide();
      $("#next-1").show();
    });
    $("#stepbtn2, #step2, #next-1, #prev-2").click(function() {
      $("#steppanel1, #steppanel3, #steppanel4").removeClass('active');
      $("#steppanel2").addClass('active');

      $("#stepbtn1").addClass('done').removeClass('active');
      $("#step1").addClass('done').removeClass('active');

      $("#stepbtn2").addClass('active');
      $("#step2").addClass('active');

      $("#stepbtn2, #step2").removeClass('done');
      $("#stepbtn3, #stepbtn4").removeClass('active done');
      $("#step3, #step4").removeClass('active done');

      $("#next-1, #next-3, #prev-2, #prev-3, #finish-1").hide();
      $("#next-2, #prev-1").show();
    });
    $("#stepbtn3, #step3, #next-2, #prev-3").click(function() {
      $("#steppanel3").addClass('active');
      $("#steppanel1, #steppanel2, #steppanel4").removeClass('active');

      $("#stepbtn1").addClass('done').removeClass('active');
      $("#step1").addClass('done').removeClass('active');

      $("#stepbtn2").addClass('done').removeClass('active');
      $("#step2").addClass('done').removeClass('active');

      $("#stepbtn3").addClass('active');
      $("#step3").addClass('active');

      $("#stepbtn3, #step3").removeClass('done');
      $("#stepbtn4").removeClass('active done');
      $("#step4").removeClass('active done');

      $("#next-1, #next-2, #prev-1, #prev-3, #finish-1").hide();
      $("#next-3, #prev-2").show();
    });
    $("#stepbtn4, #step4, #next-3").click(function() {
      $("#steppanel1, #steppanel2, #steppanel3").removeClass('active');
      $("#steppanel4").addClass('active');

      $("#stepbtn1").addClass('done').removeClass('active');
      $("#step1").addClass('done').removeClass('active');

      $("#stepbtn2").addClass('done').removeClass('active');
      $("#step2").addClass('done').removeClass('active');

      $("#stepbtn3").addClass('done').removeClass('active');
      $("#step3").addClass('done').removeClass('active');

      $("#stepbtn4").addClass('active');
      $("#step4").addClass('active');

      $("#next-1, #next-2, #prev-1, #next-3, #prev-2").hide();
      $("#prev-3, #finish-1").show();
    });
    $("#finish-1").click(function() {
      alert("Registered Successfully");
    });
    $(".header .right-side .user-details").click(function() {
      $(".user-dropdown").toggleClass("show");
    });
    $(".header .right-side .cart-btn.cart-dropdown").click(function() {
      $(".cart-dropdown .cart-detail-box").toggleClass("show");
    });
    $(".parent-megamenu").click(function() {
      $(".megamenu").toggleClass("show");
    });
    // like dislike
    $(".circle-tag img, .add-fav img, .add-wishlist img").on('click', function() {
      if ($(this).attr("src").toString().indexOf('assets/img/svg/013-heart-1.svg') != -1) {
        this.src = this.src.replace("assets/img/svg/013-heart-1.svg", "assets/img/svg/010-heart.svg");
      } else {
        this.src = this.src.replace("assets/img/svg/010-heart.svg", "assets/img/svg/013-heart-1.svg");
      }
    });
  });

  /*
	Gallery
*/

  var $window = $(window),
    $ttPageContent = $('#galleryContent'),
    gallery = $ttPageContent.find('.galley-masonry');

  $window.on('load', function() {
    var ttwindowWidth = window.innerWidth || $window.width();

  });

  // init Isotope
  var $grid = $('.tt-portfolio-content').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter button click
  $('.filter-nav').on( 'click', '.button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', '.button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  });

  function initGalleyPopup() {
    var objZoom = $ttPageContent.find('.galley-masonry .btn-zomm');
    objZoom.magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  };

  // Menu button
  $(document).ready(function() {
    $(".hamDrone-menu").click(function() {
      $(".menu-btn").toggleClass("active");
      $(".main-navigation").toggleClass("active");
    });
  });
  // Sticky Nav
  $(window).scroll(function() {
    var sticky = $('.header'),
      scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  });

  // tooltip active js
  $('[data-toggle="tooltip"]').tooltip();
  //navigation
  $(document).ready(function() {
    $('.main-menu li.menu-item-has-Tech>a, .main-menu li.menu-item-has-megamenu>a').on('click', function() {
      $(this).removeAttr('href');
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul, .megamenu').slideUp();
      } else {
        element.addClass('open');
        element.Tech('ul, .megamenu').slideDown();
        element.siblings('li').Tech('ul, .megamenu').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul, .megamenu').slideUp();
      }
    });
    $('.menu-item-has-Tech>a').append('<span class="arrow"></span>');
    $('.menu-item-has-megamenu>a').append('<span class="arrow"></span>');
  });

  // Video
  $(document).on('click', '.js-videoPoster', function(e) {
    e.preventDefault();
    var poster = $(this);
    var wrapper = poster.closest('.js-videoWrapper');
    videoPlay(wrapper);
  });

  function videoPlay(wrapper) {
    var iframe = wrapper.find('.js-videoIframe');
    var src = iframe.data('src');
    wrapper.addClass('videoWrapperActive');
    iframe.attr('src', src);
  }
  $('.parent-megamenu').click(function() {
    $('.parent-megamenu>a>i').toggleClass('fa-bars');
    $('.parent-megamenu>a>i').toggleClass('fa-times');
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.header').css("top", "0");
    } else {
      $('.header').css("top", "auto");
    }
  });
  // modal popup
  $(document).ready(function() {
    if (document.cookie.indexOf('visited=true') == -1) {
      $('#offer').modal({
        show: true
      });
      var year = 1000 * 60 * 60 * 24 * 365;
      var expires = new Date((new Date()).valueOf() + year);
      document.cookie = "visited=true;expires=" + expires.toUTCString();
    }
    if ($('#banner-adv').length > 0) {
      $('.close-banner').on('click', function() {
        $('#banner-adv').hide()
      });
    }
    if ($('#banner-adv2').length > 0) {
      $('.close-banner').on('click', function() {
        $('#banner-adv2').hide()
      });
    }
  });
  // instagram slider
  var swiper = new Swiper('.instagram-slider', {
    slidesPerView: 2,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: false,
    breakpoints: {
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 6,
      },
      1500: {
        slidesPerView: 8,
      },
    }
  });

  // category-slider
  var swiper = new Swiper('.category-slider', {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 5,
      },
    }
  });
  // popular-item-slider
  var swiper = new Swiper('.popular-item-slider', {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 8,
        spaceBetween: 15,
      },
      1800: {
        slidesPerView: 10,
        spaceBetween: 15,
      },
    }
  });
  // popular-item-slider
  var swiper = new Swiper('.near-offer-slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 15,
      }
    }
  });
  // featured-partners-slider
  var swiper = new Swiper('.featured-partners-slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 15,
      }
    }
  });
  // trending-slider
  var swiper = new Swiper('.trending-slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 15,
      }
    }
  });
  // fresh deals
  var swiper = new Swiper('.fresh-deals-slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 15,
      }
    }
  });
  // kosher-delivery-slider
  var swiper = new Swiper('.kosher-delivery-slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 15,
      }
    }
  });
  // food near me
  var swiper = new Swiper('.food-near-me', {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 8,
        spaceBetween: 15,
      }
    }
  });
  // advertisement slider
  var swiper = new Swiper('.advertisement-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  // about-us-slider slider
  var swiper = new Swiper('.about-us-slider', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 3500,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  // about-us-slider slider
  var swiper = new Swiper('.feedback-slider', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // shop-detail-slider slider

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 15,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  // Delivery time range
  $(".delivery-range-slider").ionRangeSlider({
    min: 0,
    from: new Date().getMonth(),
    values: ["$50", "$200", "$500", "$10k"],
    grid: true
  });
  // Distance range
  $(".distance-range-slider").ionRangeSlider({
    min: 0,
    from: new Date().getMonth(),
    values: ["1/4 mi", "1/2 mi", "1 mi", "2 mi", "3 mi", "4 mi", "5 mi", "10 mi"],
    grid: true
  });
  // password hide show
  $(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("data-name"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // smooth scroll
  $.fn.smoothScroll = function(setting) {
    var _default = {
        duration: 1000,
        easing: 'swing',
        offset: 0,
        top: '100px'
      },
      _setting = $.extend(_default, setting),
      _handler = function() {
        var dest = 0,
          target = this.hash,
          $target = $(target);
        $(this).on('click', function(e) {
          e.preventDefault();
          if ($target.offset().top > ($(document).height() - $(window).height())) {
            dest = $(document).height() - $(window).height();
          } else {
            dest = $target.offset().top - _setting.offset;
          }
          $('html, body').animate({
            scrollTop: dest
          }, _setting.duration, _setting.easing);
        });
      };
    return this.each(_handler);
  };
  $('.scrollnav .nav-pills .nav-link').smoothScroll({
    duration: 1000, // animation speed
    easing: 'swing', // find more easing options on http://api.jqueryui.com/easings/
    offset: 0 // custom offset
  });
  // quantity plus minus
  $('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('.quantity').find('input');
    var value = parseInt($input.val());
    if (value > 1) {
      value = value - 1;
    } else {
      value = 1;
    }
    $input.val(value);
  });
  $('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('.quantity').find('input');
    var value = parseInt($input.val());
    if (value < 100) {
      value = value + 1;
    } else {
      value = 100;
    }
    $input.val(value);
  });
  // countdown timer
  function makeTimer() {
    var endTime = new Date("01 January 2021 00:00:00 GMT+05:30");
    endTime = (Date.parse(endTime) / 1000);
    var now = new Date();
    now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#mb-days").html(days + "<h6 class='mb-0'>Days</h6>");
    $("#mb-hours").html(hours + "<h6 class='mb-0'>Hour</h6>");
    $("#mb-minutes").html(minutes + "<h6 class='mb-0'>Min</h6>");
    $("#mb-seconds").html(seconds + "<h6 class='mb-0'>Sec</h6>");
    $("#cb-days").html(days + "<p class='mb-0'>Day</p>");
    $("#cb-hours").html(hours + "<p class='mb-0'>Hr</p>");
    $("#cb-minutes").html(minutes + "<p class='mb-0'>Min</p>");
    $("#cb-seconds").html(seconds + "<p class='mb-0'>Sec</p>");
    $("#sb-days").html(days + "<p class='mb-0'>Day</p>");
    $("#sb-hours").html(hours + "<p class='mb-0'>Hr</p>");
    $("#sb-minutes").html(minutes + "<p class='mb-0'>Min</p>");
    $("#sb-seconds").html(seconds + "<p class='mb-0'>Sec</p>");
  }
  setInterval(function() {
    makeTimer();
  }, 1000);
  // nice selct
  $(document).ready(function() {
    $('select.custom-select-2').niceSelect();
  });

  // gallery
  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });
  // custom tabs restaurent page

  // full view page
  $(function() {
    $('.fullpageview').on('click', function() {
      $('.md-modal').addClass('md-show');
    });
    $('.md-close').on('click', function() {
      $('.md-modal').removeClass('md-show');
    });
  });
  $(document).keydown(function(event) {
    if (event.keyCode == 27) {
      $('.md-modal').removeClass('md-show');
    }
  });

  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  // Partners slider
  var swiper = new Swiper('.partners-slider', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    navigation: false,
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 8,
        spaceBetween: 5,
      }
    }
  });

  //Slider-revolution
  /* https://learn.jquery.com/using-jquery-core/document-ready/ */
  jQuery(document).ready(function() {

    /* initialize the slider based on the Slider's ID attribute */
    jQuery('#rev_slider_1').show().revolution({
      sliderType: "standard",
      jsFileLocation: "revolution/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9000,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },
        arrows: {
          style: "zeus",
          enable: true,
          hide_onmobile: true,
          hide_under: 600,
          hide_onleave: true,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          tmp: '<div class="tp-title-wrap"> <span class="tp-arr-titleholder">{{title}}</span><span class="tp-arr-imgholder"></span></div>',
          left: {
            h_align: "center",
            v_align: "bottom",
            h_offset: -70,
            v_offset: 50
          },
          right: {
            h_align: "center",
            v_align: "bottom",
            h_offset: 30,
            v_offset: 50
          }
        },
        bullets: {
          enable: true,
          hide_onmobile: false,
          hide_under: 600,
          hide_onleave: true,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          direction: "vertical",
          h_align: "right",
          v_align: "center",
          h_offset: 40,
          v_offset: 50,
          space: 15,
          style: 'uranus',
          tmp: '<span class="tp-bullet-inner"></span>'
        }
      },
      viewPort: {
        enable: false,
        outof: "pause",
        visible_area: "80%",
        presize: false
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [600, 600, 500, 400],
      lazyType: "none",
      parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 2000,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
        type: "mouse",
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
      }
    });
  });

  //Slider-revolution
  /* https://learn.jquery.com/using-jquery-core/document-ready/ */
  jQuery(document).ready(function() {

    /* initialize the slider based on the Slider's ID attribute */
    jQuery('#rev_slider_2').show().revolution({
      sliderType: "standard",
      jsFileLocation: "revolution/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9000,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },
        arrows: {
          style: "hebe",
          enable: true,
          hide_onmobile: true,
          hide_under: 600,
          hide_onleave: true,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          tmp: '<div class="tp-title-wrap"> <span class="tp-arr-titleholder">{{title}}</span><span class="tp-arr-imgholder"></span></div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 30,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 30,
            v_offset: 0
          }
        },
        bullets: {
          enable: true,
          hide_onmobile: false,
          hide_under: 600,
          hide_onleave: true,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          direction: "horizontal",
          h_align: "center",
          v_align: "bottom",
          h_offset: 0,
          v_offset: 30,
          space: 15,
          style: 'uranus',
          tmp: '<span class="tp-bullet-inner"></span>'
        }
      },
      viewPort: {
        enable: false,
        outof: "pause",
        visible_area: "80%",
        presize: false
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [600, 600, 500, 400],
      lazyType: "none",
      parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 2000,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
        type: "mouse",
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
      }
    });
  });

})(jQuery);
