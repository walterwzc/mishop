import React from 'react'
import { connect } from 'react-redux'
import { getHeaderBanner } from './store/actionCreator'
import Main from './Ui'

const mapState = state => {
    return {
        headerBanner: state.main.headerBanner
    }
}

const mapDispatch = dispatch => {
    return {
        getHeaderBanner: () => {
            dispatch(getHeaderBanner())
        }
    }
}

export default connect(mapState, mapDispatch)(Main)
