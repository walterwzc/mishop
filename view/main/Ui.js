import React from 'react'
import {
    TouchableWithoutFeedback,
    StatusBar,
    View,
    Dimensions,
    ScrollView,
    TextInput,
    Text,
    Image,
    WebView
} from 'react-native'

import styles from './style.js'

import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';

import resolveAssetSource from 'resolveAssetSource';

import Recomand from './Recomand';

import Cellphone from './Cellphone';

let banner1 =  require('../../resource/images/main/banner/banner-1.jpg'); 

let source = resolveAssetSource(banner1);

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getHeaderBanner();
    }

    render() {
        const messageIcon = require('../../resource/images/main/message.png')
        const searchIcon = require('../../resource/images/main/search.png')
        const qrCodeIcon = require('../../resource/images/main/qrcode.png')

        // Swiper
        const bannerRealHieght = source.height;
        const bannerRealWidth = source.width;
        const screenHeight = Dimensions.get('window').height;
        const screenWidth = Dimensions.get('window').width;
        const bannerHeight = screenWidth / bannerRealWidth * bannerRealHieght



        // Activity
        const activityPicWidth = screenWidth / 5;
        return (
            <View style={[styles.container, { backgroundColor: '#fff' }]}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.topHeader}>
                    <Image source={messageIcon} style={styles.messageIcon} />
                    <Image source={searchIcon} style={styles.searchIcon} />
                    <View style={styles.searchInputView}>
                        <TextInput
                            style={styles.searchInput}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <Image source={qrCodeIcon} style={styles.qrCodeIcon} />
                </View>
                {/* <View style={styles.navbar}>
                    <Text>推荐</Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View> */}

                <ScrollableTabView
                    initialPage={0}
                    tabBarBackgroundColor='#fff'
                    tabBarActiveTextColor='#ff4600'
                    tabBarInactiveTextColor='#8e8e8e'
                    // onChangeTab={(index, ref) => {console.log(index)}}
                    tabBarUnderlineStyle={{backgroundColor: '#ff4600', height: 4}}
                    renderTabBar={() => <ScrollableTabBar />}
                >
                    <ScrollView tabLabel='推荐'>
                        <Recomand />
                    </ScrollView>
                    
                    <Text tabLabel='智能'>智能</Text>
                    <Text tabLabel='电视'>电视</Text>
                    <Text tabLabel='电脑'>电脑</Text>
                    <ScrollView tabLabel='手机'>
                        <Cellphone />
                    </ScrollView>
                    <Text tabLabel='全面屏'>全面屏</Text>
                    <Text tabLabel='盒子'>盒子</Text>
                </ScrollableTabView>
            </View>
        )
    }
}
