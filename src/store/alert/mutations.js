export default {
    UpdateAlert(state, alert) {
        state.alert = { ...alert, open: true }
        setTimeout(() => {
            state.alert = {
                type: null,
                text: '',
                open: false,
            }
        }, 2000)
    },
}