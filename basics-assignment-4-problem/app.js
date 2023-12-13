const app = Vue.createApp({
  data() {
    return {
      topParagraphClassVisibility: true,
      color: "skyblue",
      input1: "",
    };
  },
  computed: {
    inputClasses() {
      return {
        user1: this.input1 === "user1",
        user2: this.input1 === "user2",
        visible: this.topParagraphClassVisibility,
        hidden: !this.topParagraphClassVisibility,
      };
    },
  },
  methods: {
    TopParagraphToggle() {
      this.topParagraphClassVisibility = !this.topParagraphClassVisibility;
    },
  },
});

app.mount("#assignment");
