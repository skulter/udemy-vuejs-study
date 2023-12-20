const app = Vue.createApp({
  data() {
    return {
      inputText: "",
      goals: [],
    };
  },
  methods: {
    handleInputEnter() {
      this.goals.push(this.inputText);
      this.inputText = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
