(function ($) {
  "use strict";
  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $('#back-top').fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $('#back-top').fadeIn(500);
    }
  });

                      
  $(document).ready(function () {

    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol: '-'
      });
    };
    // blog-menu
    // $('ul#blog-menu').slicknav({
    //   prependTo: ".blog_menu"
    // });

    // review-active

    var slider = $('.slider_active');
    if (slider.length) {
      slider.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          767: {
            items: 1,
            nav: false,
          },
          992: {
            items: 1,
            nav: false
          },
          1200: {
            items: 1,
            nav: false
          },
          1600: {
            items: 1,
            nav: true
          }
        }
      });
    }


    // review-active
    var testmonial = $('.testmonial_active');
    if (testmonial.length) {
      testmonial.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        responsive: {
          0: {
            items: 1,
            dots: false,
            nav: false,
          },
          767: {
            items: 1,
            dots: false,
            nav: false,
          },
          992: {
            items: 1,
            nav: true
          },
          1200: {
            items: 1,
            nav: true
          },
          1500: {
            items: 1
          }
        }
      });
    }




    // for filter
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    // wow js
    new WOW().init();

    // counter 
    $('.counter').counterUp({
      delay: 10,
      time: 10000
    });

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    /* magnificPopup img view */
    $('.img-pop-up').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });

    // blog-page

    //brand-active
    var brand = $('.brad_active');
    if (brand.length) {
      brand.owlCarousel({
        loop: true,
        autoplay: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        responsive: {
          0: {
            items: 2,
            nav: false
          },
          767: {
            items: 4
          },
          992: {
            items: 5
          }
        }
      });
    }


    // blog-dtails-page

    if (document.getElementById('default-select')) {
      $('select').niceSelect();
    }

    //about-pro-active
    $('.details_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      // autoplay:true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 1,
          nav: false
        },
        1200: {
          items: 1,
        }
      }
    });

  });

  // resitration_Form
  $(document).ready(function () {
    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });
  });



  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();



  // Search Toggle
  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });
  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $(document).ready(function () {
    $('select').niceSelect();
  });

  // prise slider 


  $('#datepicker').datepicker({
    iconsLibrary: 'fontawesome',
    icons: {
      rightIcon: '<span class="fa fa-caret-down"></span>'
    }
  });





})(jQuery);

// function submitLoanOfferFromWhatsApp() {
//   const amount = document.getElementById('requestedAmount');
//   const reqMonth = document.getElementById('month');
//   console.log(`Requested amount: ${reqAmt}`)
//   console.log(`Requested month: ${month}`)
//   var fullMessage = `Location: Website Homepage Loan Request%0Request Amount: ${reqAmt}%0AMonth Required ${month}`;
//   var whatsappUrl = `https://wa.me/2347069615095?text=${fullMessage}`;

//   window.open(whatsappUrl, '_blank');
// }


// This code allow you to send a form message from a form to your desired whatsapp Number
function submitLoanOfferFromWhatsApp() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const purpose = document.getElementById('purpose').value;
  const requestedAmount = document.getElementById('requestedAmount').value;
  const month = document.getElementById('month').value;
  const message = document.getElementById('message').value;

  if (name && email && phone && purpose && requestedAmount && month) {
      const whatsappNumber = '1234567890'; // Replace with your WhatsApp number
      const whatsappMessage = `Hello, I am ${name}. I would like to request a loan of ${requestedAmount} for ${purpose} for a duration of ${month}. My email is ${email} and my phone number is ${phone}. Additional message: ${message}`;
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappURL, '_blank');
  } else {
      alert('Please fill in all the required fields.');
  }
}
