import React, { Component } from 'react'
import { 
    Alert,
    View, 
    Text, 
    ScrollView,
    Image,
    Dimensions,
    TextInput,
    StatusBar,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Modal,
    ActivityIndicator
} from 'react-native'

import styles from './style'

const miLogo = require('../../resource/images/main/milogo.png');

export default class Login extends Component {

    // static navigationOptions = {
    //     headerStyle: {
    //         backgroundColor: '#000',
    //         height: 0
    //     }
    // }

    static navigationOptions = {
        title: '登录',
        headerStyle: {
            backgroundColor: '#ff6700',
            height: 50,
            // alignSelf:'center'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 16,
            position: 'absolute',
            right: 95,
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
        this.state = {
            username: '',
            password: '',

            animationType: 'none',
            modalVisible: false,
            transparent: true,
        }
        this._usernameOnChangeText = this._usernameOnChangeText.bind(this);
        this._passwordOnChangeText = this._passwordOnChangeText.bind(this);
    }

    _usernameOnChangeText(inputUsername) {
        this.setState({
            username: inputUsername
        });
    }

    _passwordOnChangeText(inputPassword) {
        this.setState({
            password: inputPassword
        });
    }

    _setModalVisible = visible => {
        this.setState({ modalVisible: visible })
    }

    _handleLogin() {
        this.props.userLogin(this.state.username, this.state.password);
        this._setModalVisible(true)
        // console.log(this.props.loginStatus);
        // console.log(this.props.navigation);
        setTimeout(() => {
            if (this.props.loginStatus === true) {
                this._setModalVisible(false);
                // console.log(this.props.navigation.navigate(''));
                this.props.navigation.navigate('Home');
            } else {
                this._setModalVisible(false);
                const that = this;
                Alert.alert(
                    '提示信息',
                    '账户或密码错误',
                    [
                        {text: '重新登录', onPress: () => {
                            // that.setState({
                            //     username: '',
                            //     password: ''
                            // })
                        }},
                    ],
                    { cancelable: false }
                )
            }
        }, 2000);
    }

    render() {
        // let modalBackgroundStyle = {
        //     backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : 'red',
        // };

        // let innerContainerTransparentStyle = this.state.transparent ? { backgroundColor: '#fff', padding: 20 } : null;



        return (
            <View>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this._setModalVisible(false)
                    }}
                >
                    <View style={[styles.container]}>
                        <View 
                            style={[
                                styles.innerContainer
                            ]}
                        >
                            {/* <View>
                                <Text>Hello, Modal</Text>
                            </View>
                            
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    this._setModalVisible(false)
                                }}
                            >
                                <View style={{marginTop: 20}}>
                                    <Text>Hide</Text>
                                </View>
                            </TouchableWithoutFeedback> */}
                            <ActivityIndicator size={60} color='#fff' style={{}} />
                        </View>
                        
                    </View>
                </Modal>

                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 30, marginBottom: 20}}>
                    <Image 
                        source={{uri: 'https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png'}}
                        style={{width: 48, height: 48}}
                    ></Image>
                </View>
                <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '400'}}>小米账号登陆</Text>
                <View style={{marginTop: 31, paddingLeft: 30, paddingRight: 30}}>
                    <View style={{borderBottomColor: '#d3d3d3', borderBottomWidth: 1, height: 35}}>
                        <TextInput
                            style={{paddingLeft: 5}}
                            underlineColorAndroid="transparent"
                            placeholder="邮箱/手机号/小米ID"
                            placeholderTextColor="#9b9b9b"
                            onChangeText={this._usernameOnChangeText}
                        />
                    </View>
                    <View style={{borderBottomColor: '#d3d3d3', borderBottomWidth: 1, height: 35, marginTop: 10}}>
                        <TextInput
                            style={{paddingLeft: 5}}
                            underlineColorAndroid="transparent"
                            placeholder="密码"
                            placeholderTextColor="#9b9b9b"
                            secureTextEntry={true}
                            onChangeText={this._passwordOnChangeText}
                        />
                        <Image 
                            source={require('../../resource/images/main/eye.png')}
                            style={{width: 20, height: 20, position: 'absolute', right: 0, bottom: 12}}
                        ></Image>
                    </View>
                </View>
                <View style={{paddingLeft: 30, paddingRight: 30, marginTop: 24, marginBottom: 20}}>
                    <TouchableHighlight
                        onPress={() => {
                            this._handleLogin();
                        }}
                    >
                        <View style={{paddingTop: 10, paddingBottom: 10, backgroundColor: '#ff6700', borderRadius: 5}}>
                            <Text style={{color: '#fff', textAlign: 'center', fontSize: 16}}>登录</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableWithoutFeedback
                        onPress={() => {
                            this._setModalVisible(true)
                        }}
                    >
                        <View style={{paddingTop: 10, paddingBottom: 10, backgroundColor: '#fff', borderRadius: 5, marginTop: 24}}>
                            <Text style={{color: '#000', textAlign: 'center', fontSize: 16}}>手机短信登陆/注册</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            Alert.alert(
                                '提示信息',
                                '账户或密码错误',
                                [
                                    {text: '重新登录', onPress: () => {}},
                                ],
                                { cancelable: false }
                            )
                        }}
                    >
                        <View style={{paddingRight: 10, borderRightColor: '#646464', borderRightWidth: 1}}>
                            <Text style={{color: '#646464'}}>立即注册</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{paddingLeft: 10}}>
                        <Text style={{color: '#646464'}}>忘记密码?</Text>
                    </View>
                </View>

                <View style={styles.guessYouLikeCon}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.borderLineLeft}>
                            <Text>                        </Text>
                        </View>
                        <Text style={{color: '#b0b0b0'}}>其他方式登录</Text>
                        <View style={styles.borderLineRight}>
                            <Text>                        </Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image
                        source={require('../../resource/images/main/qq.png')}
                        style={{width: 30, height: 30, marginRight: 20}}
                    ></Image>
                    <Image
                        source={require('../../resource/images/main/weibo.png')}
                        style={{width: 30, height: 30, marginRight: 20}}
                    ></Image>
                    <Image
                        source={require('../../resource/images/main/zhifubao.png')}
                        style={{width: 30, height: 30}}
                    ></Image>
                </View>
                
            </View>
        )
    }
}