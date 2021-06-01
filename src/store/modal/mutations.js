export default {
    updateModal(state, type) {
        state.modalEditor.type = type
        state.modalEditor.open = true
    },
    closeModal(state) {
        state.modalEditor.type = null
        state.modalEditor.open = false
    },
    AddFile(state, { url, type }) {
        state.modalEditor[`${type}Arr`] = [...state.modalEditor[`${type}Arr`], url]
    }
}