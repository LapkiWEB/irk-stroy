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

$('.slider__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
            breakpoint: 1700,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1450,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 704,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

let secret = document.querySelector('#secret');
document.querySelector('.contact__form-btn').onclick = function () {
    secret.value = 'secretkey';
}