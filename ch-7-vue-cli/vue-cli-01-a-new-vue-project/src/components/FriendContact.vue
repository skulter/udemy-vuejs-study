<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleShow">{{ isShow ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="isShow">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>
<script>
export default {
    props: ['name', 'phoneNumber', 'emailAddress'],
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        toggleShow() {
            this.isShow = !this.isShow
        }
    }
}
</script>