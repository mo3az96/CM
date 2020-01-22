$(window).on("load", function () {
});
$(document).ready(function () {
    new WOW().init();
    $('.search-control').click(function () {
        $(this).toggleClass("open-search");
        $(this).toggleClass("close-search");
        $(".search-form").toggleClass("search-form-open");
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
        $('.search-form').click(function () {
            $(".search-control").addClass("open-search");
            $(".search-control").removeClass("close-search");
            $(".search-form").toggleClass("search-form-open");
            $('.search-input').focus();
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });


        $(".new").wrap("<div class='new-cont'></div>");

        $(".news").addClass("swiper-container");
        $(".news-swiper").addClass("swiper-wrapper");
        $(".new-cont").addClass("swiper-slide");
        $(".foot-nav-links-header").addClass("mo-accordion");
        $(".foot-links").addClass("mo-panel");
        $(".Clients-slider ._2nd-sec").addClass("swiper-wrapper");
        $(".clients-item").wrap("<div class='swiper-slide'></div>");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    })

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
});