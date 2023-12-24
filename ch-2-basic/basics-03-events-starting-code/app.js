const app = Vue.createApp({
  data() {
    return {
      counter: 20,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmName = this.name;
    },
    submitForm() {
      console.log("코드");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
  },
});
app.mount("#events");
