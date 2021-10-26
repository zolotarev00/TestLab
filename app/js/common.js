$(function () {
    // slider
    $('.feedback__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    // Мобильное меню
    $('.header__top-menu__humb').on('click', function () {
        $('.header__top-menu nav').toggleClass('mvis');
        $('.header__top-menu').toggleClass('hopen');
    });

    if ($(window).width() < 767) {
        $('.header__top-menu nav ul li').on('click', function () {
            $('.header__top-menu nav').toggleClass('mvis');
            $('.header__top-menu__humb').toggleClass('hopen');
        });
    }

    // Маска телефона
    $('.phone').mask('+7 (999) 999-99-99');
    // + Вопрос - ответ
    $('.questions__block-top').click(function () {
        $(this).children('.questions__block-togle').slideToggle(300);
        return false;
    });
    $('.questions__block-box').on('click', function () {
        $('.questions__block-top__btn').toggleClass('rotate');
    });

});
// Автоматическая высота, отзывы/слайдер
$(function () {
    $('.feedback__block').matchHeight();
});

