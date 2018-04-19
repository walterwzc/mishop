import { SET_USER_LOGIN } from "./actionTypes";
import { AsyncStorage } from 'react-native';

export const setUserLoginStatus = loginStatus => {
    return {
        type: SET_USER_LOGIN,
        loginStatus
    }
}

export const userLoginAction = (username, password) => {
    return (dispatch) => {
        // console.log('in userLoginAction');
        // console.log(username, password);

        let url = `https://www.easy-mock.com/mock/5ad41f22cdecd20f04088941/dataGetTest/userlogin?username=${username}&password=${password}`;

        // console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(response => {
                // console.log(response.data);
                const loginStatus = response.data.login;
                // console.log('in userLoginAction: ' + loginStatus);
                const action = setUserLoginStatus(loginStatus);
                // 将LoginStatus 存入 AsyncStorage
                AsyncStorage.setItem('loginStatus', loginStatus.toString());

                dispatch(action);
            })
    }
}