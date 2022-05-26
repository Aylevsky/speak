export class Loader {
  constructor() {
    document.querySelector('.loader').classList.add("animate__animated", "animate__fadeOut");
    setTimeout(function () {
      document.querySelector('.loader').style.display = 'none';
    }, 200)
  }
}