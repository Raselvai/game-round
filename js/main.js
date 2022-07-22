(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(1800).fadeOut("slow");

    });

    $(document).ready(function () {

        //03. Smooth Scroll Initialize
        function smoothScroolInit() {
            $('a').smoothScroll({
                speed: 1000
            });
        }
        smoothScroolInit();

        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 20) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function (event) {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200);
            } else {
                $('.back-to-top').fadeOut(200);
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.hamburger-menu, #menu li a').on('click', function () {
            $('.hamburger-menu .line-top').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
            $('.mobile-menu').toggleClass('open');
        });


        //07. testimonial Slider Initialize
        function project_carouselInit() {
            $('.owl-carousel.project-active').owlCarousel({
                dots: false,
                loop: true,
                margin: 30,
                autoplay: false,
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 1
                    },
                    768: {
                        items: 2,
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
        project_carouselInit();

        //07. testimonial Slider Initialize
        function meet_carouselInit() {
            $('.owl-carousel.meet-active').owlCarousel({
                dots: false,
                loop: true,
                margin: 30,
                nav: true,
                autoplay: false,
                navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    500: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 4,
                    },
                    1200: {
                        items: 4
                    }
                }
            });
        }
        meet_carouselInit();

        //07. testimonial Slider Initialize
        function company_carouselInit() {
            $('.owl-carousel.company-active').owlCarousel({
                dots: false,
                loop: true,
                margin: 30,
                nav: false,
                autoplay: false,
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
                responsive: {
                    576: {
                        items: 3
                    },
                    768: {
                        items: 4,
                    },
                    1200: {
                        items: 5
                    }
                }
            });
        }
        company_carouselInit();


        if (window.matchMedia('(max-width: 575px)').matches) {

            //07. testimonial Slider Initialize
            function game_row_carouselInit() {
                $('.owl-carousel.game-row').owlCarousel({
                    dots: false,
                    loop: true,
                    margin: 0,
                    items: 1,
                    nav: false,
                    autoplay: false,
                    autoplayTimeout: 1500,
                    autoplayHoverPause: true,
                });
            }
            game_row_carouselInit();

        }


        //07. testimonial Slider Initialize
        function broke_carouselInit() {
            $('.owl-carousel.broke-active').owlCarousel({
                dots: false,
                loop: true,
                margin: 30,
                nav: false,
                dots: true,
                items: 1,
                autoplay: false,
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
            });
        }
        broke_carouselInit();

        //07. testimonial Slider Initialize
        function broketwo_carouselInit() {
            $('.owl-carousel.broke-two-active').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots: false,
                items: 1,
                autoplay: false,
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 3,
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
        broketwo_carouselInit();

        //07. testimonial Slider Initialize
        function relatable_carouselInit() {
            $('.owl-carousel.relatable-active').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots: false,
                items: 1,
                autoplay: false,
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    500: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 2,
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
        relatable_carouselInit();

        //07. testimonial Slider Initialize
        if (window.matchMedia('(max-width: 767px)').matches) {

            function collection_carouselInit() {
                $('.owl-carousel.collection-active').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: false,
                    dots: false,
                    autoplay: true,
                    stagepadding: 2,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        576: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 2,
                        },
                        1200: {
                            items: 2
                        }
                    }
                });
            }
            collection_carouselInit();

        }


    });

})(jQuery);