$(document).ready(function () {
    $('.menu__wrapper').click(function () {
        if (!$('.menu__wrapper').hasClass('openDone')) {
            $('.menu__wrapper').addClass('openDone');
            $('nav').css("right", "0px");
        } else {
            $('.menu__wrapper').removeClass('openDone');
            $('nav').css("right", "-310px");
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 1250) {
            $('nav ul li').removeAttr('style');
        }
    });
});