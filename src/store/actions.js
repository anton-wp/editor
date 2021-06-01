import auth from './auth'
import modal from './modal'

export default {
    ...auth.actions,
    ...modal.actions
}