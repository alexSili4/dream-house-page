// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const prizesSwiperMobile = new Swiper('.prizes-slider-mobile', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  spaceBetween: 50,
  speed: 800,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.prizes-slider-button-next',
    prevEl: '.prizes-slider-button-prev',
  },
  pagination: {
    el: '.prizes-slider-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return `${String(current).padStart(2, '0')}\\${String(total).padStart(2, '0')}`;
    },
  },
});

const prizesSwiperDesk = new Swiper('.prizes-slider-desk', {
  modules: [Navigation],
  direction: 'horizontal',
  spaceBetween: 16,
  slidesPerView: 2,
  speed: 800,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.prizes-slider-button-next',
    prevEl: '.prizes-slider-button-prev',
  },
});

const mobileAppScreensSwiper = new Swiper('.mobile-app-screens-slider', {
  direction: 'horizontal',
  spaceBetween: 0,
  speed: 800,
  grabCursor: true,
});

const mobileAppStepsSwiper = new Swiper('.mobile-app-steps-slider', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  spaceBetween: 50,
  speed: 800,
  grabCursor: true,
  navigation: {
    nextEl: '.mobile-app-steps-slider-button-next',
    prevEl: '.mobile-app-steps-slider-button-prev',
  },
  pagination: {
    el: '.mobile-app-steps-slider-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return `${String(current).padStart(2, '0')}\\${String(total).padStart(2, '0')}`;
    },
  },
});

mobileAppScreensSwiper.on('slideChange', function () {
  mobileAppStepsSwiper.slideTo(mobileAppScreensSwiper.activeIndex);
});

mobileAppStepsSwiper.on('slideChange', function () {
  mobileAppScreensSwiper.slideTo(mobileAppStepsSwiper.activeIndex);
});
