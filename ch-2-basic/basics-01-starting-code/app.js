const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Vue 강의 수료하기",
      courseGoalB: "<h2>Master Vue 강의</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      console.log(this);
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});
app.mount("#user-goal");
