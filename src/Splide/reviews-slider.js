import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const splide = new Splide('.splide', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  perPage: 3,
  autoScroll: {
    autoStart: true,
    speed: 1,
  },
});

splide.mount();
