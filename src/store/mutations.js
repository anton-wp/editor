import auth from './auth'
import alert from './alert'
import modal from './modal'

export default {
    ...auth.mutations,
    ...alert.mutations,
    ...modal.mutations,
}