const app = Vue.createApp({
data() {
    return{
        task: '',
        tasks: [],
        show : true
    }
    },
    methods: {
        addTask() {
            if (this.task === '') {
                return
            }
            this.tasks.push(this.task);
            this.task = '';
        },
        handleVisibleShow() {
            this.show = !this.show
        }
    },
    computed: {
        buttonCaption() {
            return this.show ? "hide" : "show";
        }
    }
})

app.mount('#assignment');