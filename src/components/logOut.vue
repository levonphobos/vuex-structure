<template>
    <b-button variant="primary" size="sm" @click="logout">Logout</b-button>
</template>

<script>
    export default {
        name: "logOut",
        methods:{
            logout(){
                this.$store.dispatch('logout')
            }
        }
    }

</script>

<style scoped>

</style>
