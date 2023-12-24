const app = Vue.createApp({
  data() {
    return {
      MAX_COUNTER: 37,
      counter: 0,
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  },
  computed: {
    message() {
      if (this.counter > this.MAX_COUNTER) {
        return "Too much!";
      }
      return "Not there yet";
    },
  },
  watch: {
    counter(value) {
      if (value > this.MAX_COUNTER) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 5000);
      }
    },
  },
});

app.mount("#assignment");
