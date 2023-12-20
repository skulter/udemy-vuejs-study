const app = Vue.createApp({
  data() {
    return {
      registerValue: "",
      confirmRegisterValue: "",
    };
  },
  methods: {
    customAlert() {
      alert("아무거나 출력되라!");
    },
    register(e) {
      this.registerValue = e.target.value;
    },
    confirmRegister(e) {
      this.confirmRegisterValue = this.registerValue;
    },
  },
});

app.mount("#assignment");
