import React, {Component} from 'react'

import { connect } from 'react-redux'

import { getCategoryListAction } from './store/actionCreator'

import Ui from './Ui'

const mapState = (state) => {
	return {
		list: state.category.list
	}
}

const mapDispatch = (dispatch) => {
	return {
		getCategoryListData() {
			const action = getCategoryListAction()
			dispatch(action)
		}
	}
}

export default connect(mapState, mapDispatch)(Ui)
