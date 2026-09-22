import Swiper from 'swiper';
import { Navigation, Thumbs, FreeMode, Autoplay, Pagination } from 'swiper/modules';




new Swiper('.mySwiper', {
    modules: [Autoplay],

    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        680: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
});


const swiperThumbs = new Swiper('.product-card__gallery-thumbs', {
    modules: [FreeMode, Thumbs],
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,

});


const swiperMain = new Swiper('.product-card__gallery-main', {
    modules: [Navigation, Thumbs],
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: swiperThumbs,
    },
});