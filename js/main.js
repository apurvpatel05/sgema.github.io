(function ($) {
 "use strict";
	
	// // stickey menu
	$(window).on('scroll',function() {    
		var scroll = $(window).scrollTop();
		if (scroll < 265) {
			$("#sticky-header").removeClass("sticky");
		}else{
			$("#sticky-header").addClass("sticky");
		}
	});

    // slicknav
    $('ul#navigation').slicknav({
        prependTo:".responsive-menu-wrap"
    });
	
	// slider-active
	$('.slider-active').owlCarousel({
		smartSpeed:1000,
		margin:0,
		nav:false,
		autoplay:true,
		autoplayTimeout:3000,
		loop:true,
		responsive:{
			0:{
				items:1
			},
			450:{
				items:1
			},
			678:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	/*---------------------
	 countdown
	--------------------- */
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
		});
	});
	
	// counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	// expoevent-active
	$('.expoevent-active').owlCarousel({
		smartSpeed:1000,
		margin:0,
		nav:false,
		autoplay:true,
		autoplayTimeout:3000,
		loop:true,
		navText:['<i class="fa fa-angle-left"></i> PRE','Next <i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			450:{
				items:1
			},
			678:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	// speak-active
	$('.speak-active').owlCarousel({
		smartSpeed:1000,
		margin:0,
		nav:false,
		autoplay:true,
		autoplayTimeout:3000,
		loop:true,
		navText:['<i class="fa fa-angle-left"></i> PRE','Next <i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			450:{
				items:1
			},
			678:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})

	// magnificPopup
	$('.popup').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});
	// magnificPopup
	$('.popup-video').magnificPopup({
		type: 'iframe',
		gallery:{
			enabled:true
		}
	});

    // brand-active
    $('.brand-active').owlCarousel({
        smartSpeed:1000,
        margin:0,
        nav:false,
		autoplay:true,
		autoplayTimeout:3000,
        loop:true,
        navText:['<i class="fa fa-angle-left"></i> PRE','Next <i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            678:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    // latest-event-active
    $('.latest-event-active').owlCarousel({
        smartSpeed:1000,
        margin:0,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        URLhashListener:true,
        startPosition: 'URLHash',
		loop:true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            678:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // blog-active
    $('.blog-active').owlCarousel({
        smartSpeed:1000,
        margin:0,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        URLhashListener:true,
        startPosition: 'URLHash',
		loop:true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // accomodation-active
    $('.accomodation-active').owlCarousel({
        smartSpeed:1000,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
		loop:true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            678:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    // latest-event-active
    $('.test-active').owlCarousel({
        smartSpeed:1000,
        margin:0,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        URLhashListener:true,
        startPosition: 'URLHash',
		autoplay:true,
		autoplayTimeout:3000,
		loop:true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // Hero Section Parellx
    $(window).scroll(function() {
        var scrollPx = $(this).scrollTop();
        //console.log(scrollPx);
        $('.bg-left').css({ 'transform': 'translateX(-' + scrollPx * 1.5 + 'px)translateX(-' + scrollPx * 1.5 + 'px)' });
        $('.bg-right').css({ 'transform': 'translateX(' + scrollPx * 1.5 + 'px)translateX(' + scrollPx / 1.5 + 'px)' });
    });

	// click

	$(".search-wrap a").on("click", function(){
		$(".top-search").toggleClass("active", 10000);
	});
	$(".close-btn").on("click", function(){
		$(".top-search").removeClass("active");
	});
	
	
	/*---------------------
	// Ajax Contact Form
	--------------------- */

	$('.cf-msg').hide();
		$('form#cf button#submit').on('click', function() {
			var fname = $('#fname').val();
			var subject = $('#subject').val();
			var email = $('#email').val();
			var msg = $('#msg').val();
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

			if (!regex.test(email)) {
				alert('Please enter valid email');
				return false;
			}

			fname = $.trim(fname);
			subject = $.trim(subject);
			email = $.trim(email);
			msg = $.trim(msg);

			if (fname != '' && email != '' && msg != '') {
				var values = "fname=" + fname + "&subject=" + subject + "&email=" + email + " &msg=" + msg;
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: values,
					success: function() {
						$('#fname').val('');
						$('#subject').val('');
						$('#email').val('');
						$('#msg').val('');

						$('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
						setTimeout(function() {
							$('.cf-msg').fadeOut('slow');
						}, 4000);
					}
				});
			} else {
				$('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
			}
			return false;
	});
	
	/*--------------------------
	 scrollUp
	---------------------------- */	
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});

})(jQuery); 