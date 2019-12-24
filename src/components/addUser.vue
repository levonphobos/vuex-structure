<template>
    <div class="addUser" align="center">
        <b-button v-b-modal.modal-1 class="mt-3" title="Add User" style="padding: 3px 10px;">
            <img src="https://blackrockbusiness.com/wp-content/uploads/2017/05/quickbooks-enterprise-add-user.png"
                 alt="Add User" width="30">
        </b-button>
        <b-modal id="modal-1" title="Add New User" :hide-footer="true">
            <b-form @submit.prevent="add(),$root.$emit('bv::hide::modal', 'modal-1')">
                <b-form-input autofocus class="mb-2" v-model="userName" placeholder="First Name"></b-form-input>
                <b-form-input class="mb-2" v-model="lastName" placeholder="Last Name"></b-form-input>
                <b-form-input class="mb-2" v-model="email" type="email" placeholder="Email Address"></b-form-input>
                <b-form-input class="mb-2" v-model="phone" placeholder="Phone Number"></b-form-input>
                <b-button type="submit" variant="primary" style="float: right;" class="mr-2 mt-4 mb-2">Add</b-button>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "addUser",
        data() {
            return {
                userName: '',
                lastName: '',
                phone: '',
                email: '',
                userId: 4
            }
        },

        methods: {
            add() {
                const newUser = {
                    userName: this.userName,
                    lastName: this.lastName,
                    phone: this.phone,
                    email: this.email,
                    id: this.userId
                };

                this.userId++;
                if (newUser.userName && newUser.lastName && newUser.email && newUser.phone) {
                    this.$store.dispatch('addUser', newUser)
                }

                this.userName = '';
                this.lastName = '';
                this.phone = '';
                this.email = '';
            }
        }
    }
</script>

<style scoped>

</style>
