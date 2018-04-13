import React, { Component } from 'react'
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

import styles from './style'

import resolveAssetSource from 'resolveAssetSource';

let banner1 =  require('../../resource/images/main/banner/banner-1.jpg'); 
let source = resolveAssetSource(banner1);

class Discovery extends Component {
    render() {
        const messageIcon = require('../../resource/images/main/message.png')
        const searchIcon = require('../../resource/images/main/search.png')
        const qrCodeIcon = require('../../resource/images/main/qrcode.png')

        const bannerRealHieght = source.height;
        const bannerRealWidth = source.width;
        const screenHeight = Dimensions.get('window').height;
        const screenWidth = Dimensions.get('window').width;
        const bannerHeight = screenWidth / bannerRealWidth * bannerRealHieght

        const activityPicWidth = screenWidth / 4;

        const morningPageWidth = screenWidth / 3 - 20;

        return (
            <View style={[styles.container, { backgroundColor: '#fff' }]}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.topHeader}>
                    
                    <Image source={searchIcon} style={styles.searchIcon} />
                    <View style={styles.searchInputView}>
                        <TextInput
                            style={styles.searchInput}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <Image source={messageIcon} style={styles.messageIcon} />
                </View>
                <ScrollView>
                    <Image
                        source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/329c4cad20190902dec4d0fbb09e9963.jpg'}}
                        style={{width: screenWidth, height: bannerHeight, marginTop: 10}}
                    ></Image>

                    <View style={styles.activity}>
                        <Image
                            source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/2a4633339d15c5fa6b9f23ae612d56f5.jpg'}}
                            style={{ width: activityPicWidth, height: 60 }}
                        />
                        <Image
                            source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/cf85e6417be62d77992c758d785a345a.jpg'}}
                            style={{ width: activityPicWidth, height: 60 }}
                        />
                        <Image
                            source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/f834054ddbd3c89ff98ebb7b7db12933.jpg'}}
                            style={{ width: activityPicWidth, height: 60 }}
                        />
                        <Image
                            source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/15ad1630abfad11b7376be3baabe859d.jpg'}}
                            style={{ width: activityPicWidth, height: 60 }}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 15, paddingBottom: 15, borderBottomColor: '#f5f5f5', borderBottomWidth: 21}}>
                        <Image
                            source={{uri: 'https://i6.mifile.cn//b2c-men/oms/3/88/5aaf57821a5e8.jpg'}}
                            style={{width: 74, height: 47}}
                        ></Image>
                        <View>
                            <Text style={{fontSize: 14}}>小米之家北京昌平永旺店</Text>
                            <Text style={{color: '#8f8f8f'}}>距离3.94公里</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 12, color: '#b2b2b2'}}>其他零售店</Text>
                            <Image 
                                source={require('../../resource/images/main/ico-right-arrow.png')}
                                style={{width: 20, height: 20}}
                            ></Image>
                        </View>
                    </View>
                    <View>
                        <Image
                            source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/25ebc8352515b61ba49dad934871a52a.jpg'}}
                            style={{width: screenWidth, height: 100}}
                        ></Image>
                        <Image
                            source={{uri: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c8d2db6306b58cd254e565ccc8b56f93.jpg'}}
                            style={{width: screenWidth, height: 42}}
                        ></Image>
                    </View>
                    <ScrollView
                        scrollEnabled={true}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{paddingTop: 8, paddingBottom: 8, backgroundColor: '#f5f5f5'}}
                    >
                        <Image 
                            source={{uri: 'http://i8.mifile.cn/v1/a1/162b85eb-958b-1661-0e2e-bf125ff0e499.webp'}}
                            style={{width: morningPageWidth, height: 134, marginRight: 8}}
                        ></Image>
                        <Image 
                            source={{uri: 'http://i8.mifile.cn/v1/a1/0a3a0ddb-71d6-9b27-e933-d51f8bbf0d62.webp'}}
                            style={{width: morningPageWidth, height: 134, marginRight: 8}}
                        ></Image>
                        <Image 
                            source={{uri: 'http://i8.mifile.cn/v1/a1/1e932f0c-9be2-b39a-edbf-bbe9318823e6.webp'}}
                            style={{width: morningPageWidth, height: 134, marginRight: 8}}
                        ></Image>
                        <Image 
                            source={{uri: 'http://i8.mifile.cn/v1/a1/e46c5264-09b7-2eaf-16f4-6c62fd01ba86.webp'}}
                            style={{width: morningPageWidth, height: 134, marginRight: 8}}
                        ></Image>
                        <Image 
                            source={{uri: 'http://i8.mifile.cn/v1/a1/71436d68-b123-3989-44e1-49c4a5f8f07d.webp'}}
                            style={{width: morningPageWidth, height: 134}}
                        ></Image>
                    </ScrollView>
                    <View>
                        <Image
                            source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/4168df0485cba7a0d9bafa0f0dfcbd0a.jpg'}}
                            style={{width: screenWidth, height: bannerHeight}}
                        ></Image>
                        <View style={{padding: 10}}>
                            <Text style={{fontSize: 15}}>小米MIX 2为什么依然值得购买？</Text>
                            <Text style={{color: '#808080', fontSize: 13, lineHeight: 22}}>性能高端，还有艺术品般的外观，米粉节期间售价低至2899元。</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 5}}>
                                <Text style={{color: '#b3b3b3'}}>2小时前</Text>
                                <Text style={{color: '#b3b3b3'}}>1030阅读</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Discovery
