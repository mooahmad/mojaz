(function($) {

    //"use strict";

    var mainwindow = $(window);

    // rev-slider
    if (jQuery("#slider1").length) {
        jQuery("#slider1").revolution({
            sliderType: "standard",
            sliderLayout: "fullwidth",
            delay: 5000,
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                arrows: {
                    style: 'zeus',
                    tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                    enable: true,
                    rtl: false,
                    hide_onmobile: false,
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    tmp: ''
                }
            },
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 1000,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
                type: "scroll",
            },
            gridwidth: 1170,
            gridheight: 550
        });
    };
	
   // rev-slider
    if (jQuery("#slider2").length) {
        jQuery("#slider2").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                arrows: {
                    style: 'zeus',
                    tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                    enable: true,
                    rtl: false,
                    hide_onmobile: false,
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    tmp: ''
                }
            },
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 1000,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
                type: "scroll",
            },
            gridwidth: 1170,
            gridheight: 550
        });
    };	
	

    //Hide Loading Box (Preloader)
    function stylePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    //Update header style + Scroll to Top
    function headerStyle() {
        if ($('.site-header').length) {
            var windowpos = mainwindow.scrollTop();
            if (windowpos >= 250) {
                $('.site-header').addClass('fixed-header');
                $('.scroll-to-top').fadeIn(300);
            } else {
                $('.site-header').removeClass('fixed-header');
                $('.scroll-to-top').fadeOut(300);
            }
        }
    }

    //Submenu Dropdown Toggle
    if ($('.site-header li.dropdown ul').length) {
        $('.site-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.site-header li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        $('.navigation li.dropdown > a').on('click', function(e) {
            e.preventDefault();
        });
    }

    //show hide search box

    $('.bz_search_bar').on("click", function(e) {
        $('.bz_search_box').slideToggle();
        e.stopPropagation();
    });

    $(document).on("click", function(e) {
        if (!(e.target.closest('.bz_search_box'))) {
            $(".bz_search_box").slideUp();
        }
    });


 if (jQuery(".gridcont").length) {
	$(function(){
		var $grid = $('.gridcont').isotope({
		   itemSelector: '.griditem',
			//layoutMode: 'fitRows'
			 percentPosition: true,
			 masonry: {
						columnWidth: '.griditem'
					  }
		});
			
		
	});    
  }

    //Post Slider--
    if ($('.postitem-row').length) {
        $('.postitem-row').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            smartSpeed: 500,
            autoplay: 4000,
            items: 1,
            dots: false,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    //Post Slider--
    if ($('.postitem-row2').length) {
        $('.postitem-row2').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            smartSpeed: 500,
            autoplay: 4000,
            items: 1,
            dots: false,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }	
	
	
    //blog-slider--
    if ($('.blog-slider').length) {
        $('.blog-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            items: 1,
            smartSpeed: 500,
            autoplay: 2000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }

 //.slide-instar--
    if ($('.slide-insta').length) {
        $('.slide-insta').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            items: 1,
            smartSpeed: 500,
            autoplay: 2000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 6
                },
                1024: {
                    items: 6
                },
                1200: {
                    items: 6
                }
            }
        });
    }	
	

//related_blogs--
    if ($('.rlpost-sidebar').length) {
        $('.rlpost-sidebar').owlCarousel({
            loop: true,
            nav: true,
			 margin: 30,
            dots: false,
            items: 1,
            smartSpeed: 500,
            autoplay: 2000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    }	
	
//related_blogs full-width--
    if ($('.rlpost-fullwidth').length) {
        $('.rlpost-fullwidth').owlCarousel({
            loop: true,
            nav: true,
			 margin: 30,
            dots: false,
            items: 1,
            smartSpeed: 500,
            autoplay: 2000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }
	
	
	
	
	
	
    //Gallery Carousel Slider
    if ($('.carousel-outer').length) {
        $('.carousel-outer').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplayHoverPause: false,
            autoplay: true,
            smartSpeed: 700,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                760: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1100: {
                    items: 4
                }
            }
        });
    }

    //Testimonial Carousel Slider
    if ($('.testm-wrp').length) {
        $('.testm-wrp').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            smartSpeed: 1000,
            autoplay: 4000,
            items: 1,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }

    //sidebar testimonial Slider
    if ($('.sidebar-testimonial-widge').length) {
        $('.sidebar-testimonial-widge').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            items: 1,
            smartSpeed: 500,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }

    

    //related-products-carouse
    if ($('.related-products-carousel2').length) {
        $('.related-products-carousel2').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 500,
            dots: false,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }

    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }

    //Contact Form Validation
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }

    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }



    //counter number changer
    function counter_number() {
        var timer = $('.timer');
        if (timer.length) {
            timer.appear(function() {
                timer.countTo();
            })
        }
    }
	
 if (jQuery(".filter-list").length) {	
	$(function(){
		var $grid = $('.filter-list').isotope({
		   itemSelector: '.project-item',
			//layoutMode: 'fitRows'
			 percentPosition: true,
			 masonry: {
						columnWidth: '.project-item'
					  }
		});
		// filter items on button click
		$('.filtergroup').on( 'click', 'span', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});	
			
		
	});	
	
    }	
	
	

    // google map
    if ($('#contact-google-map').length) {
		var settingsItemsMap = {
			  zoom: 16,
			  center: new google.maps.LatLng(30.521338, -94.976751),
			  zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE
			  },
			  scrollwheel: false,
			   styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
       
			  mapTypeId:  google.maps.MapTypeId.ROADMAP
		  };
		  var map = new google.maps.Map(document.getElementById('contact-google-map'), settingsItemsMap );
		  var image = 'images/icons/map-icon.png';
		  var myMarker = new google.maps.Marker({
			  position: new google.maps.LatLng(40.741895, -73.989308),
			  draggable: true,
			  icon: image
		  });

		  map.setCenter(myMarker.position);
		  myMarker.setMap(map);
		  // Google map   

    }
	
	
	
	
	
	

    /* ==========================================================================
       When document is ready, do
       ========================================================================== */

    $(document).on('ready', function() {
        counter_number();
    });

    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    mainwindow.on('scroll', function() {
        headerStyle();

    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    mainwindow.on('load', function() {
        stylePreloader();
    });

    /* ==========================================================================
       When Window is resizing, do
       ========================================================================== */

    mainwindow.on('resize', function() {});

})(window.jQuery);