import { connect } from 'react-redux'
import Ui from './Ui'
import { getSwitchValueChange } from './store/actionCreator'
import { AsyncStorage } from 'react-native'

const mapState = state => ({
    loginStatus: state.login.loginStatus
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(Ui)


