import React, { Component } from 'react';

import {
    Alert,
    View, 
    Text, 
    ScrollView,
    Image,
    Dimensions,
    TextInput,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native';

class Settings extends Component {


    static navigationOptions = {
        title: '设置',
        headerStyle: {
            backgroundColor: '#fafafa',
            height: 50,
            // alignSelf:'center'
        },
        headerTintColor: '#969696',
        headerTitleStyle: {
            color: '#424242',
            fontWeight: 'bold',
            fontSize: 16,
            // textAlign: 'center',
            // alignSelf: 'center',
            // justifyContent: 'center',
            // alignItems: 'center'
        },
        // headerLeft: (<View><Text>back</Text></View>), 
        headerRight: (<View></View>)
    }


    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <View>
                <View style={{height: 55, backgroundColor: '#eee'}}>
                    <Text style={{marginLeft: 20, marginTop: 25, fontSize: 16}}>账号管理</Text>
                </View>
                <View style={{height: 55, backgroundColor: '#fff', justifyContent: 'center'}}>
                    <Text style={{marginLeft: 20}}>个人资料</Text>
                </View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        Alert.alert('温馨提醒', '确定退出吗?', [
                            {
                                text: '取消',
                                onPress: () => {}
                            },
                            {
                                text: '确定',
                                onPress: () =>
                                    // ToastAndroid.show(
                                    //     '你点击了确定~',
                                    //     ToastAndroid.SHORT
                                    // )
                                    {
                                        this.props.userLogout();
                                        this.props.navigation.navigate('Home');
                                    }
                            }
                        ])
                        
                    }}
                >
                    <View style={{height: 45, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', marginTop: 30, marginLeft: 20, marginRight: 20, borderRadius: 30}}>
                        <Text>退出账号</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default Settings;