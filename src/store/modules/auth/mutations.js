export default {
    loginSuccess(state, user) {
        state.email = user.email;
        state.password = user.password;
        state.loggingIn = true;
        state.photo = user.photo;
    },

    logout(state){
        state.email = '';
        state.password = '';
        state.loggingIn = false;
        state.photo = ''
    }
}
