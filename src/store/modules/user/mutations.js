export default {
    currentUser(state,users){
      state.user = users;
    },

    addNewUser(state, newUser){
        state.user.push(newUser);
    },

    removeUser(state,id){
        state.user = state.user.filter(user=>{
            return user.id !== id;
        })
    },

    editUser(state,editedUser){
        state.user = state.user.filter(user=>{
            return user.id !== editedUser.id
        });

        state.user.push(editedUser);
        state.user.sort(function(a, b) {
            return a.id - b.id;
        });
    }
}
