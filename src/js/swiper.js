// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const prizesSwiper = new Swiper('.prizes-slider-mobile', {
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
