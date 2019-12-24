import actions from './auth/actions';
import mutations from './auth/mutations';
import getters from './auth/getters';

const state = {email: '', password: '', loggingIn: false, photo:''};

export default {
    state,
    getters,
    mutations,
    actions
}
