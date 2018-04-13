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

import Carousel from 'react-native-looped-carousel';

import resolveAssetSource from 'resolveAssetSource';

import styles from './style'

import cellphoneStyles from './CellphoneStyle'


let banner1 =  require('../../resource/images/main/banner/banner-1.jpg'); 

let source = resolveAssetSource(banner1);


class Recomand extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {id: 1, url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cf37080505199b499ce29c7a9982f563.jpg'},
                {id: 2, url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e04c8b9f293a0af76896cd043aabb5b.jpg'}
            ]
        }
    }

    render() {
        const bannerRealHieght = source.height;
        const bannerRealWidth = source.width;
        const screenHeight = Dimensions.get('window').height;
        const screenWidth = Dimensions.get('window').width;
        const bannerHeight = screenWidth / bannerRealWidth * bannerRealHieght

        // Activity
        const activityPicWidth = screenWidth / 5;

        return (
            <ScrollView>
                <Carousel
                    delay={4000} //自动切换的延迟 （毫秒）
                    style={styles.wrapper} //轮播组件的样式
                    autoplay //自动轮播
                    // pageInfo    //在底部显示当前页面下标 / 页面个数
                    swiper //允许手势滑动
                    pageInfoBackgroundColor={'#fff'} //分页标示的背景色
                    // onAnimateNextPage={(p) => console.log(p)}  //切换页面时的回调
                    pageInfoTextStyle={{ color: 'blue' }} //下面字体样式
                    // pageInfoTextSeparator={'!!!'}          //中间的分隔符

                    bullets={true} //显示小圆点
                    bulletsContainerStyle={styles.paginationStyle}
                    bulletStyle={styles.wrapperDot} //未选中时小圆点的样式
                    chosenBulletStyle={styles.activatedDot} //选中时小圆点的样式
                >
                    {this.state.data.map(item => {
                        imageUrl = item.url
                        return (
                            <View
                                style={[
                                    styles.slide,
                                    {
                                        width: Dimensions.get('window').width,
                                        height: bannerHeight
                                    }
                                ]}
                                key={item.id}
                            >
                                <Image
                                    resizeMode="center"
                                    style={styles.swiperImage}
                                    source={{ uri: item.url }}
                                />
                            </View>
                        )
                    })}
                </Carousel>

                {/* Activity */}
                <View style={styles.activity}>
                    <Image
                        source={{uri: 'http://i8.mifile.cn/v1/a1/59c9e9b7-a2d0-e3e7-68c6-231cd05d7c97.webp'}}
                        style={{ width: activityPicWidth, height: 60 }}
                    />
                    <Image
                        source={{uri: 'http://i8.mifile.cn/v1/a1/34e14274-f1ee-b6bd-86cb-f858c50cab70.webp'}}
                        style={{ width: activityPicWidth, height: 60 }}
                    />
                    <Image
                        source={{uri: 'http://i8.mifile.cn/v1/a1/1afce5cb-8798-172d-31bb-abb2e753a93f.webp'}}
                        style={{ width: activityPicWidth, height: 60 }}
                    />
                    <Image
                        source={{uri: 'http://i8.mifile.cn/v1/a1/a9685d11-0240-2d83-b171-0cda7e2d5284.webp'}}
                        style={{ width: activityPicWidth, height: 60 }}
                    />
                    <Image
                        source={{uri: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a814915af7d4b06200e0b2a48c8459f8.png'}}
                        style={{ width: activityPicWidth, height: 60 }}
                    />
                </View>

                {/* List Page */}
                <View style={{width: '100%'}}>
                    <Image
                        source={require('../../resource/images/main/xinpinyuyue.jpg')}
                        style={{width: screenWidth, height: 40}}
                    />
                    <Image
                        source={{uri: 'http://i8.mifile.cn/v1/a1/f778caad-a251-08f4-12dd-edf1b887c4ee.webp'}}
                        style={{width: screenWidth, height: bannerHeight}}
                    ></Image>
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingLeft: 10, paddingBottom: 8}}>
                            <Text style={{fontSize: 16}}>小米Note 3  人脸解锁</Text>
                            <View style={{flexDirection: 'row', marginRight: 10}}>
                                <Text style={{color: '#ed5b00', fontSize: 12, paddingTop: 2}}>¥</Text>
                                <Text style={{color: '#ed5b00', fontSize: 18}}>1799</Text>
                                <Text style={{color: '#ed5b00', fontSize: 12, textAlignVertical: 'bottom', paddingBottom: 2}}>起</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, paddingLeft: 10}}>
                            <Text style={{color: '#b0b0b0'}}>变焦双摄，1600万美颜自拍</Text>
                            <Text style={{fontSize: 14, color: '#b0b0b0', textDecorationLine: 'line-through', paddingRight: 20}}>¥1999</Text>
                        </View>
                    </View>

                    <View style={cellphoneStyles.listTwoPicCon}>
                        <View>
                            <Image
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/53d32c5e55cba00b473b48908c571f02.jpg'}}
                                style={cellphoneStyles.twoPicStyle}
                            ></Image>
                            <View style={cellphoneStyles.listDescCon}>
                                <Text style={cellphoneStyles.listDescTitle}>小米MIX 2</Text>
                                <Text style={cellphoneStyles.listDescDetail}>5.99大屏，4轴光学防抖</Text>
                                <View style={cellphoneStyles.listPriceCon}>
                                    <Text style={cellphoneStyles.listPriceColor}>¥</Text>
                                    <Text style={cellphoneStyles.listPriceColor}>2899</Text>
                                    <Text style={cellphoneStyles.listPriceBegin}>起</Text>
                                    <Text style={cellphoneStyles.listPriceOriginal}>¥3299</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Image
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb4a5925027a3ba86ad01feeba40d049.jpg'}}
                                style={cellphoneStyles.twoPicStyle}
                            ></Image>
                            <View style={cellphoneStyles.listDescCon}>
                                <Text style={cellphoneStyles.listDescTitle}>小米MIX 2</Text>
                                <Text style={cellphoneStyles.listDescDetail}>小米5X 变焦双摄</Text>
                                <View style={cellphoneStyles.listPriceCon}>
                                    <Text style={cellphoneStyles.listPriceColor}>¥</Text>
                                    <Text style={cellphoneStyles.listPriceColor}>1299</Text>
                                    <Text style={cellphoneStyles.listPriceBegin}>起</Text>
                                    <Text style={cellphoneStyles.listPriceOriginal}>¥1499</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        height: 44,
                        width: '100%',
                        backgroundColor: '#ddd'
                    }}
                />
            </ScrollView>
        )
    }
}

export default Recomand
