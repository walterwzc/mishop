import React from 'react'
import Home from './view/home/View'
import SearchPage from "./view/search/Ui";
import ShoppingCar from './view/shoppingcar/view';
import Main from './view/main/View';
import Login from './view/login/View';
import Mine from './view/mine/view';
import Settings from './view/settings/View';

import ModalDemo from "./view/zTextComponent/ModalDemo";
import ModalExample from "./view/zTextComponent/ModalExample";
import ActivityIndicatorDemo from "./view/zTextComponent/ActivityIndicatorDemo";
import StatusBarDemo from "./view/zTextComponent/StatusBarDemo";
import DialogDemo from "./view/zTextComponent/DialogDemo";
import AlertDemo from "./view/zTextComponent/AlertDemo";

import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './store/'

import {
    View,
    Text,
    Button,
    StatusBar,
} from 'react-native'


// ModalExample: { screen: ModalExample },
// ModalDemo: { screen: ModalDemo},
// ActivityIndicatorDemo: { screen: ActivityIndicatorDemo },
// StatusBarDemo: { screen: StatusBarDemo },
// DialogDemo: { screen: DialogDemo},
// AlertDemo: { screen: AlertDemo },
const RouteApp = StackNavigator({
    Home: { screen: Home },
    SearchPage: { screen: SearchPage },
    ShoppingCar: { screen: ShoppingCar},
    Main: { screen: Main},
    Login: { screen: Login},
    Mine: { screen: Mine },
    Settings: { screen: Settings},
})

// , {
//     // headerMode: 'none'
// }


const App = () => {
    return (
        <Provider store={store}>
            <RouteApp />
        </Provider>
    )
}

// const App = () => {
//     return (
//         <DialogDemo></DialogDemo>
//     )
// }

export default App



// class Screen1 extends React.Component {
//     render() {
//         return (
//         <View style={[{flex: 1}, { backgroundColor: '#6a51ae', paddingTop: 20, marginTop: -20 }]}>
//             <StatusBar
//                 barStyle="light-content"
//                 backgroundColor="#6a51ae"
//             />
//             <Text style={[{justifyContent: 'center', alignItems: 'center', marginTop: 270, textAlign: 'center'}, { color: '#fff' }]}>
//                 Light Screen
//             </Text>
//             <Button
//                 title="Next screen"
//                 onPress={() => this.props.navigation.navigate('Screen2')}
//                 color={"blue"}
//             />
//         </View>
//         );
//     }
// }

// // { paddingTop: 20, marginTop: -20 }
  
// class Screen2 extends React.Component {
//     render() {
//         return (
//             <View style={[{flex: 1}, { backgroundColor: '#ecf0f1', paddingTop: 20, marginTop: -20  }]}>
//                 <StatusBar
//                     barStyle="dark-content"
//                     backgroundColor="#ecf0f1"
//                 />
//                 <Text style={[{justifyContent: 'center', alignItems: 'center', marginTop: 270, textAlign: 'center'}, { color: '#fff' }]}>
//                     Dark Screen
//                 </Text>
//                 <Button
//                     title="Next screen"
//                     onPress={() => this.props.navigation.navigate('Screen1')}
//                 />
//             </View>
//         );
//     }
// }

// export default StackNavigator(
//     {
//         Screen1: {
//             screen: Screen1
//         },
//         Screen2: {
//             screen: Screen2
//         }
//     },
//     {
//         // mode: 'modal',
//         headerMode: 'none'
//     }
// )





