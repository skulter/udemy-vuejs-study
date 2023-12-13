const app = Vue.createApp({
  data() {
    return {
      // counterValue: 0,
      name: "",
      lastName: "",
      counter: 0,
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        console.log("counter this", this);
        setTimeout(function () {
          console.log("inner function that", that);
          console.log("inner function this", this);
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   // 자동으로 name의 최신 값을 받아 온다.
    //   // name(newValue, oldValue)
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    //   // this.fullname = this.name + " " + "kim";
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      console.log("재실행...");
      if (this.name === "" || this.lastName === "") return "";
      return this.name + " " + this.lastName;
    },
    counter() {
      console.log("asd");
      if (this.counterValue > 50) {
        this.counterValue = 0;
      }
      return this.counterValue;
    },
  },
  methods: {
    outputFullName() {
      console.log("재실행...");
      if (!this.name) return "";
      return this.name + " " + "kim";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
