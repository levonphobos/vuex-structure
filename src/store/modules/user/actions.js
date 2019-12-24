import UserService from "../../../services/user-service";

export default {
    addUser(ctx, newUser){
        ctx.commit('addNewUser',newUser)
    },

    getCurrentUser(ctx){
        UserService.getCurrentUsers().then(response=>{
            ctx.commit('currentUser',response)
        });
    },

    editUser(ctx, editedUser){
        ctx.commit('editUser',editedUser);
    }
}
