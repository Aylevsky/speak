export const header__langList = {
  data: {
    header__langList_display: false,
  },
  methods: {
    showLangList(event) {
      let x;
      if (document.documentElement.clientWidth > 1024) {
        x = document.querySelector(".header__lang>svg").getBoundingClientRect().x - 35;
      } else {
        x = document.querySelector(".header__lang").getBoundingClientRect().x - 25;
      }
      let list = document.querySelector(".header__lang-list");
      list.style.cssText = `left: ${x}px`;
      this.header__langList_display = true;
      document.addEventListener('click', this.documentClick);
      this.stopPropagation(event)
    },
    documentClick(event) {
      this.header__langList_display = false;
    },
    stopPropagation(event) {
      event.stopPropagation();
    }
  },
}