import Splide from '@splidejs/splide';

const splide = new Splide('.splide', {
  type: 'loop',
  arrows: false,
  perPage: 1,
});

splide.mount();
