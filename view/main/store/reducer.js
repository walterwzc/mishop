import { SET_HEADER_BANNER } from './actionTypes'

const defaultState = {
    headerBanner: []
}

export default (state = defaultState, action) => {
    if (action.type === SET_HEADER_BANNER) {
        const newState = {
            headerBanner: [...action.data]
        }
        return newState
    }
    return state
}
