import { header__langList } from "./__lang/header__lang.js"
import { header__menuBurger } from "./__menu-burger/header__menu-burger.js";

export class Header {
  constructor() {
    const app = Vue.createApp({
      data() {
        return {
          ...header__langList.data,
          ...header__menuBurger.data
        }
      },
      methods: {
        ...header__langList.methods,
        ...header__menuBurger.methods
      },
    });

    const vm = app.mount('.header');
  }
}