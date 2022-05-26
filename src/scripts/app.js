import * as functions from "./modules/functions.js";
functions.isWebp();



import { Header } from "../blocks/header/header.js";
new Header();

import { Speakers } from "../blocks/speakers/speakers.js";
new Speakers().speakers__slider();

import { HowWork } from "../blocks/how-work/how-work.js";
new HowWork().HowWork__steps();

import { Services } from "../blocks/services/services.js";
new Services().Services__inputNum();

import { Reviews } from "../blocks/reviews/reviews.js";
new Reviews().Reviews__slider();

import { Loader } from "../blocks/loader/loader.js";
new Loader();
const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: false,
  live: true
})
wow.init();