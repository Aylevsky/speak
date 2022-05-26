export const header__menuBurger = {
  data: {
    header__navigation_visible: false
  },
  methods: {
    showNavigations() {
      if (!this.header__navigation_visible) {
        document.documentElement.style.cssText = `overflow: hidden`;
        this.header__navigation_visible = true;
      } else {
        document.documentElement.style.cssText = `overflow: auto`;
        this.header__navigation_visible = false;
      }
    },
  },
}