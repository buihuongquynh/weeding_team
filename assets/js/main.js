$(document).ready(function() {
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 4000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,

                loop: true
            }
        }
    });
});
var countDown = {
    init: function() {
        this.timeDown();
    },
    timeDown: function() {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
            x = setInterval(function() {
                let now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById('Day').innerText = Math.floor(distance / (day)),
                    document.getElementById('Hours').innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById('Mins').innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById('Secs').innerText = Math.floor((distance % (minute)) / second);

            }, second)
    }
}
countDown.init();
const gallery = {
    init: function() {
        gallery.clickFilter();
    },
    clickFilter: function() {
        $('.gallery_masonry').isotope({
            itemSelector: '.gallery__item',
            // layoutMode: 'fitRows'
        });
        $('.gallery-section .gallery__list li').click(function() {
            $('.gallery-section .gallery__list li').removeClass('gallery-active');
            $(this).addClass('gallery-active');
            var selector = $(this).attr('data-filter');
            $('.gallery_masonry').isotope({
                filter: selector
            });
            return false;
        });

    }
}
gallery.init();
// -------------- SLIDER LOGO ------------------
$(document).ready(function() {
    $('.slider_logo').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                nav: false
            },
            500: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                loop: true
            }
        }
    })
});

//---------------HEADER--------------------------------------
let btnHumburger = document.querySelector('.humburger__btn');
let menuMobile = document.querySelector('.menu__mobile');




let btnBlog = document.querySelector('.menu__link--click');
let submenuMb = document.querySelector('.submenuMb');
btnBlog.addEventListener('click', function(event) {
    event.preventDefault();
    submenuMb.classList.toggle("submenuMb--active")
});

btnHumburger.addEventListener('click', function(event) {
    event.preventDefault();
    menuMobile.classList.toggle("menu__mobile--active");
    submenuMb.classList.remove("submenuMb--active");
});