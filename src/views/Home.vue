<template>
    <div>
        <h2 align="center" class="mt-3">Welcome To Vuex Example</h2>
        <b-img class="ml-5" thumbnail rounded="circle" :src="getPhoto" alt="User" width="100"></b-img>
        <LogOut class="logout"></LogOut>
        <hr>
        <AddUser></AddUser>
        <i class="fab fa-facebook"></i>

        <hr>

        <div>
            <ul class="user-ul">
                <li v-for="i in getUser">
                    <b-container class="bv-example-row">
                        <b-row>
                            <b-col><img style="margin-right: 20px;"
                                        src="https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a-instagram-profile-icon-by-vexels.png"
                                        alt="User" width="20">
                                {{i.userName}} {{i.lastName}}
                            </b-col>
                            <b-col>{{i.phone}}</b-col>
                            <b-col>{{i.email}}</b-col>
                            <b-col>
                                <span @click="removeUser(i.id)" class="edit-remove" title="Remove">
                                    <img src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/56-512.png"
                                         alt="Remove" width="20">
                                </span>
                                <span v-b-modal="`${i.id}`" class="edit-remove" title="Edit"><img
                                        src="https://f0.pngfuel.com/png/798/560/brown-pencil-illustration-png-clip-art.png"
                                        alt="Edit" width="30"></span>
                            </b-col>
                            <b-modal :id="`${i.id}`" title="Edit User" :hide-footer="true">
                                <b-form @submit.prevent="onSubmit($event, i.id),$root.$emit('bv::hide::modal', `${i.id}`)">
                                    <b-form-input autofocus class="mb-2" :value="i.userName"
                                                  placeholder="First Name"></b-form-input>
                                    <b-form-input class="mb-2" :value="i.lastName"
                                                  placeholder="Last Name"></b-form-input>
                                    <b-form-input class="mb-2" :value="i.email" type="email"
                                                  placeholder="Email Address"></b-form-input>
                                    <b-form-input class="mb-2" :value="i.phone"
                                                  placeholder="Phone Number"></b-form-input>
                                    <b-button type="submit" variant="primary" style="float: right;" class="mr-2 mt-4 mb-2">Save</b-button>
                                </b-form>
                            </b-modal>
                        </b-row>
                    </b-container>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import LogOut from '../components/logOut.vue'
    import AddUser from '../components/addUser'
    import {mapGetters} from 'vuex'

    export default {
        name: 'home',
        data() {
            return {
                photo: ''
            }
        },
        components: {
            LogOut: LogOut,
            AddUser: AddUser
        },

        created() {
            this.$store.dispatch('getCurrentUser');
        },

        // mounted() {
        //     this.$store.watch(
        //         (state,getters) => state.User.user,
        //         (newValue, oldValue) => {
        //             console.log(newValue);
        //         }
        //     )
        // },

        computed: {
            ...mapGetters({
                getPhoto: 'getImg',
                getUser: 'getUser'
            })
        },

        methods: {
            removeUser(id) {
                this.$store.commit('removeUser', id)
            },

            onSubmit(evt, id) {
                const editedUser = {};
                editedUser.id = id;
                let arr = [];
                for(let i of evt.target.children){
                    if(i.tagName === 'INPUT'){
                        arr.push(i.value)
                    }
                }

                editedUser.userName = arr[0];
                editedUser.lastName = arr[1];
                editedUser.email = arr[2];
                editedUser.phone = arr[3];
                this.$store.dispatch('editUser', editedUser);
            },
        }
    }
</script>

<style>
    .logout {
        float: right;
        margin: 30px 50px;
    }

    .user-ul {
        list-style-type: none;
        padding: 0;
        margin: 0 20px;
        user-select: none;
    }

    .user-ul li {
        padding: 7px 15px;
        margin-bottom: 5px;
        border-radius: 10px;
        font-weight: 500;
    }

    .user-ul li:hover {
        box-shadow: 0 0 4px #b9b9b9;
    }

    .user-ul li:nth-child(even) {
        background-color: #dfefff;
    }

    .user-ul li:nth-child(odd) {
        background-color: #f0f0f0;
    }

    .edit-remove {
        cursor: pointer;
        float: right;
        opacity: .8;
    }

    .edit-remove:hover {
        opacity: 1;
    }

    .edit-remove:focus {
        outline: none;
    }
</style>
