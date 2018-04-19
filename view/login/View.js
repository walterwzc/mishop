import { connect } from 'react-redux';
import Login from './Ui'

import { userLoginAction } from "./store/actionCreator";

const mapStateToProps = state => ({
    loginStatus: state.login.loginStatus
})

const mapDispatchToProps = dispatch => {
    return {
        userLogin(username, password) {
            // console.log('in userLogin');
            const action = userLoginAction(username, password);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);