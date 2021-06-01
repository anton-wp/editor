export default {
    async registration({ state, commit }, data) {
        return new Promise((resolve) => {
            if (state.auth.users.length < 0) resolve(data)
            const user = state.auth.users.find(user => user.email === data.email)
            if (user) {
                throw new Error('with this name the user already exists')
            } else {
                resolve(data)
            }
        }).then(res => {
            commit('AddUser', res);
            return 'account created'
        }).catch(error => {
            throw error
        })
    },
    async login({ commit, state }, data) {
        return new Promise((resolve) => {
            if (state.auth.users.length < 0) throw new Error('no users')
            const user = state.auth.users.find(user => user.email === data.email)
            if (user) {
                if (user.password === data.password) {
                    resolve(data)
                }
                else {
                    throw new Error('invalid password')
                }
            } else {
                throw new Error('invalid login')
            }
        }).then(res => {
            commit('LoginUser', { user: res, token: true });
            return 'Welcome'
        }).catch(error => {
            throw error
        })
    }
}