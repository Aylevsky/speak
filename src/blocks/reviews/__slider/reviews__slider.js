import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Reviews__slider() {
  const swiper = new Swiper('.reviews__slider', {
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }
    },
    modules: [Navigation, Pagination],
    pagination: {
      el: '.reviews__slider-pagination',
      clickable: true,
    },
    spaceBetween: 20,
  });
}