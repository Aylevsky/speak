export function Services__inputNum() {
  const app = Vue.createApp({
    data() {
      return {
        minutesPrice: 49,
        minutes: 10,
      }
    },
    computed: {
      price() {
        return this.minutesPrice * this.minutes;
      }
    },
    methods: {
      plusTenMinutes() {
        this.minutes += 10;
      },
      minusTenMinutes() {
        if (this.minutes > 0) this.minutes -= 10;
      }
    },
  })

  const vm = app.mount('.services');
}