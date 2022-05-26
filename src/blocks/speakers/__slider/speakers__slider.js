import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function speakers__slider() {
  const swiper = new Swiper('.speakers__slider', {
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 0
      }
    },
    modules: [Navigation, Pagination],
    pagination: {
      el: '.speakers__slider-pagination',
      clickable: true,
    },

    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
}