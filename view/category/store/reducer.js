import { GET_CATEGORYLIST } from './actionTypes'

const defaultState = {
	list: [],
}

export default (state = defaultState, action) => {
	if(action.type === GET_CATEGORYLIST) {
        const newState = {
            list: [...action.list]
        }
        return newState;
	}
	return state;
}