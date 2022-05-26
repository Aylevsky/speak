export function HowWork__steps() {
  const app = Vue.createApp({
    data() {
      return {
        stepIndex: 1
      }
    },
    methods: {
      changeStep(index, event) {

        // Удаляем класс how-work__num_selected_true у всех элементов how-work__num
        let howWork__num = document.querySelectorAll(".how-work__num");
        for (let i = 0; i < howWork__num.length; i++) {
          howWork__num[i].classList.remove("how-work__num_selected_true")
        }

        // Добавляем класс how-work__num_selected_true кликнутому элементу 
        // (если блоков несколько то всем элементам)
        let selectedHowWork__num = document.querySelectorAll(`.how-work__num[data-index="${index}"]`);
        for (let i = 0; i < selectedHowWork__num.length; i++) {
          selectedHowWork__num[i].classList.add("how-work__num_selected_true")
        }

        // Скрываем все блоки текста how-work__step
        let allHowWork__step = document.querySelectorAll(".how-work__step");
        for (let i = 0; i < allHowWork__step.length; i++) {
          allHowWork__step[i].classList.remove("how-work__step_mob-display_block");
        }

        // показываем выбранный блок how-work__step
        let selectedHowWork__step = document.querySelectorAll(`.how-work__step[data-index="${index}"]`);
        for (let i = 0; i < selectedHowWork__step.length; i++) {
          selectedHowWork__step[i].classList.add("how-work__step_mob-display_block");
        }

      },
    },
  })

  const vm = app.mount('.how-work__steps');
}