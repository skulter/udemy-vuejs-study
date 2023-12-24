const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
         <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">{{show ? 'Hide Details' : 'Show Detils'}}</button>
          <ul v-if="show">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
    `,
  data() {
      return {
        friend: 
          {
            id: "manuel",
            name: "Manuel Lorenz",
            phone: "01234 5678 991",
            email: "manuel@localhost.com",
          },
        show: false,
      };
  },
  methods: {
    toggleDetails() {
      this.show = !this.show;
    },
  },
});

app.mount('#app');