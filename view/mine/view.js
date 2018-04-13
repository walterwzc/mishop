import { connect } from 'react-redux'
import Ui from './Ui'
import { getSwitchValueChange } from './store/actionCreator'
import { AsyncStorage } from 'react-native'

const mapState = state => ({
    isSwitched: state.discovery.isSwitched
})

const mapDispatch = dispatch => ({
    handleValueChange(value) {
        AsyncStorage.setItem('switchStatus', value.toString())

        const action = getSwitchValueChange(value)
        dispatch(action)
    }
})

export default connect(mapState, mapDispatch)(Ui)


