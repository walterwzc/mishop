import React from 'react'
import Home from './view/home/View'
import SearchPage from "./view/search/Ui";
import ShoppingCar from './view/shoppingcar/view';
import Main from './view/main/View';
import Login from './view/login/Ui';

import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './store/'

const RouteApp = StackNavigator({
    Home: { screen: Home },
    SearchPage: { screen: SearchPage },
    ShoppingCar: { screen: ShoppingCar},
    Main: { screen: Main},
    Login: { screen: Login},
})

const App = () => {
    return (
        <Provider store={store}>
            <RouteApp />
        </Provider>
    )
}

export default App
