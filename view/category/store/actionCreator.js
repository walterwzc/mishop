import { GET_CATEGORYLIST } from './actionTypes'


export const categoryListAction = (list) => ({
	type: GET_CATEGORYLIST,
	list: list
})

export const getCategoryListAction = () => {
	return (dispatch) => {
		let url = "http://api.m.mi.com/v1/home/category_v2"
		fetch(url)
			.then(res => res.json())
			.then((res) => {
                const action = categoryListAction(res.data);
                dispatch(action);
			})
	}
}
