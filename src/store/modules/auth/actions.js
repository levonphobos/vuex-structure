import authService from '../../../services/auth-service'
import router from "../../../router";

export default {
    login(ctx, user) {
        authService.login(user).then(response => {
            if (response) {
                localStorage.setItem('token', JSON.stringify(user));
                ctx.commit('loginSuccess', response);
                router.push('/')
            }
        });
    },

    logout(ctx) {
        router.push('/login');
        localStorage.removeItem('token');
        ctx.commit('logout')
    }

}
