const app = Vue.createApp({
  data() {
    return {
      name: "jinho",
      age: "33",
      imgUrl:
        "https://i.namu.wiki/i/6yf4L03WY4tFdmEJYe40US6KGcfClrdu89KONf-uBcZX4Lg1SleJ7k_u283z7O5sr08Eal_CEKx15D9k37__qg.webp",
    };
  },
  methods: {
    afterAge() {
      return +this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});
app.mount("#assignment");
