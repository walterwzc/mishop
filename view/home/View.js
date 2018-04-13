import { connect } from 'react-redux'
import Home from './Ui'
import { selectedTabAction } from './actionCreator'
import { getSwitchValueChange } from '../discovery/store/actionCreator'

const mapState = state => ({
    selectedTab: state.home.selectedTab,
    isShowNear: state.discovery.isSwitched
})

const mapDispatch = dispatch => ({
    changeSelectedTab(type) {
        const action = selectedTabAction(type)
        dispatch(action)
    },

    initSwitchValue(result) {
        const action = getSwitchValueChange(result)
        dispatch(action)
    }
})

export default connect(mapState, mapDispatch)(Home)

