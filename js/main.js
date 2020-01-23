$(window).on("load", function () {
});
$(document).ready(function () {
    $('select').selectpicker({
        dropupAuto: false
    });
    new WOW().init();
    $('.search-control').click(function () {
        $(this).toggleClass("open-search");
        $(this).toggleClass("close-search");
        $(".search-form").fadeToggle(700);
        $('.search-input').focus();
    });


    var mainswiper = new Swiper('.main-slider .swiper-container', {
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
        spaceBetween: 10,
        loop: true,
        effect: 'fade',
        simulateTouch: true,
        breakpoints: {
            500: {
                navigation: false
            },
        }
    });
    if ($(window).width() <= 767) {
        $('.dropmenu').wrap("<div class='drop-mob'></div>");
        $('.search-control').click(function () {
            $("body").toggleClass("overflow");
        });
        $('.search-form').click(function () {
            $("body").toggleClass("overflow");
            $(".search-control").addClass("open-search");
            $(".search-control").removeClass("close-search");
            $(".search-form").fadeToggle(500);
            $('.search-input').focusout();
        });
        $('.menu-open').click(function () {
            $(".navbar-cont").fadeIn(200);
            $('.mo-navbar').addClass("mo-nav-open");
            $("body").toggleClass("overflow");
        });
        $('.navbar-cont').click(function () {
            $(".navbar-cont").fadeOut(500);
            $('.mo-navbar').removeClass("mo-nav-open");
            $("body").toggleClass("overflow");
        });
        $('.search-cont, .nav-li, .lang').click(function (e) {
            e.stopPropagation();
        });
        $('.mo-dropdown').click(function (e) {
            $('.drop-mob').slideToggle(500);
        });


        $(".new").wrap("<div class='new-cont'></div>");
        $(".news").addClass("swiper-container");
        $(".news-swiper").addClass("swiper-wrapper");
        $(".new-cont").addClass("swiper-slide");
        $(".Clients-slider ._2nd-sec").addClass("swiper-wrapper");
        $(".clients-item").wrap("<div class='swiper-slide'></div>");

        $(".services").wrap("<div class='swiper-container services-slider'></div>");
        $(".services").addClass("swiper-wrapper");
        $(".service").wrap("<div class='swiper-slide'></div>");


        var swiper = new Swiper('.news', {
            pagination: {
                el: '.news .swiper-pagination',
                clickable: true,
            },
            // navigation: {
            //     nextEl: '.main-slider .swiper-button-next',
            //     prevEl: '.main-slider .swiper-button-prev',
            // },
            autoplay: {
                delay: 10000,
            },
            spaceBetween: 10,
            loop: true,
            simulateTouch: true,
            breakpoints: {
                500: {
                    navigation: false
                },
            }
        });
        var swiper = new Swiper('.Clients-slider', {
            pagination: {
                el: '.Clients-slider .swiper-pagination',
                clickable: true,
            },
            // navigation: {
            //     nextEl: '.main-slider .swiper-button-next',
            //     prevEl: '.main-slider .swiper-button-prev',
            // },
            autoplay: {
                delay: 10000,
            },
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            simulateTouch: true,
            breakpoints: {
                500: {
                    navigation: false
                },
            }
        });
        var swiper = new Swiper('.services-slider', {
            pagination: {
                el: '.services .swiper-pagination',
                clickable: true,
            },
            // navigation: {
            //     nextEl: '.main-slider .swiper-button-next',
            //     prevEl: '.main-slider .swiper-button-prev',
            // },
            autoplay: {
                delay: 10000,
            },
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            simulateTouch: true,
            breakpoints: {
                500: {
                    navigation: false
                },
            }
        });
    }
    var a = 0;
    $(window).scroll(function () {
        if ($("div").hasClass("numbers-cont")) {
            if (a === 0 && $(this).scrollTop() >= ($(".numbers-cont").offset().top) - 500) {
                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1
            }
        }
        if ($(this).scrollTop() >= 38) {
            $('.fixed-header').addClass("fixed-scroll");
        } else {
            $('.fixed-header').removeClass("fixed-scroll");
        }

    });



    $(window).on("resize", function () {
        if ($(window).width() >= 992) {
            $("footer").css("background-position-y", $(window).innerHeight() - ($("footer").outerHeight() + 65));
        }
    });

    if ($(window).width() >= 992) {
        $("footer").css("background-position-y", $(window).innerHeight() - ($("footer").outerHeight() + 65));
    }
});