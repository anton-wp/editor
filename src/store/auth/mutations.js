export default {
    AddUser(state, user) {
        state.auth.users = [...state.auth.users, user]
    },
    LoginUser(state, data) {
        state.auth.token = data.token
        state.auth.user = data.user
    },
    Logout(state) {
        state.auth.token = false
    },
}