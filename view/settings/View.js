import React, { Component } from 'react';
import { connect } from "react-redux";

import { setUserLoginStatus } from "../login/store/actionCreator";

import Settings from './Ui'

import { AsyncStorage } from "react-native";


const mapDispatchToProps = (dispatch) => {
    return {
        userLogout() {
            const action = setUserLoginStatus(false);
            AsyncStorage.removeItem('loginStatus');
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(Settings);

