<template>
    <div class="login-block">
        <b-form ref="b-form" @submit.prevent="logIn">
            <b-form-input autofocus v-model="email" placeholder="Enter Your Mail" name="mail"></b-form-input>
            <br>
            <b-form-input v-model="password" type="password" placeholder="Enter Your Password"
                          name="password"></b-form-input>
            <br>
            <b-button type="submit" variant="primary" size="sm">Sign In</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                email: '',
                password: ''
            }
        },

        methods: {
            logIn() {
                const user = {
                    email: this.email,
                    password: this.password
                };
                this.$store.dispatch('login', user);
            }
        },


    }
</script>

<style>

    .login-block {
        width: 300px;
        padding: 30px 40px;
        text-align: center;
        margin: 150px auto;
    }

</style>
