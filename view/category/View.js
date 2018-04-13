import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getListDataAction, getRefreshingAction } from './store/actionCreator'

import Ui from './Ui'

const mapState = (state) => {
	return {
		list: state.category.list,
		refreshing: state.category.refreshing
	}
}

const mapDispatch = (dispatch, ownProps) => {
	return {
		getListData() {
			const action = getListDataAction(true)
			dispatch(action)
		},
		handleListRefresh() {
			let action = getRefreshingAction(true)
			dispatch(action)
			action = getListDataAction(false)
			dispatch(action)
		}
	}
}

export default connect(mapState, mapDispatch)(Ui)
