import React from 'react'
import Home from './view/home/View'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import Demo8 from "./view/sometest/Demo8";

import store from './store/'

const RouteApp = StackNavigator({
    // Demo8: { screen: Demo8 },
    Home: { screen: Home }
})

const App = () => {
    return (
        <Provider store={store}>
            <RouteApp />
        </Provider>
    )
}

export default App
