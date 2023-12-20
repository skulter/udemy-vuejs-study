const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
    boxBClasses() {
      return { active: this.boxBSelected };
    },
    boxCClasses() {
      return { active: this.boxCSelected };
    },
  },
  methods: {
    boxSelected(box) {
      console.log(box);
      const method = {
        A: () => {
          this.boxASelected = !this.boxASelected;
        },
        B: () => {
          this.boxBSelected = !this.boxBSelected;
        },
        C: () => {
          this.boxCSelected = !this.boxCSelected;
        },
      };
      method[box]();
    },
  },
});

app.mount("#styling");
