import React, { Component } from 'react'
import { 
    View, 
    Text, 
    ScrollView,
    Image,
    Dimensions,
    TextInput,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native'

import styles from './style'

export default class Login extends Component {

    // static navigationOptions = {
    //     header: null
    // }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#000',
            height: 0
        }
    }

    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={styles.textText}>Login</Text>
            </View>
        )
    }
}