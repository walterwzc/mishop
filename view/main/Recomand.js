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


let banner1 =  require('../../resource/images/main/banner/banner-1.jpg'); 

let source = resolveAssetSource(banner1);


class Recomand extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {id: 1, url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db836f98c10eb6c04b05df6b3f1e3e8a.jpg'},
                {id: 2, url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8cc5e04a3f6020d81cb3b00a1b6c6581.jpg'},
                {id: 3, url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2bb21c48b35c0ab2cd7308c0dd4c59d5.jpg?bg=FFFFFF'},
                {id: 4, url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d2144d3b0b018f0cdd1282db885bd80f.jpg?bg=FFFFFF'}
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
                        source={require('../../resource/images/main/activity/1.png')}
                        style={{ width: activityPicWidth, height: 60 }}
                    />
                    <Image
                        source={require('../../resource/images/main/activity/2.png')}
                        style={{ width: activityPicWidth, height: 60 }}
                    />
                    <Image
                        source={require('../../resource/images/main/activity/3.png')}
                        style={{ width: activityPicWidth, height: 60 }}
                    />
                    <Image
                        source={require('../../resource/images/main/activity/4.png')}
                        style={{ width: activityPicWidth, height: 60 }}
                    />
                    <Image
                        source={require('../../resource/images/main/activity/5.png')}
                        style={{ width: activityPicWidth, height: 60 }}
                    />
                </View>

                {/* List Page */}
                <View>
                    <Image
                        source={require('../../resource/images/main/list/hotsale.jpg')}
                        style={styles.hotSale}
                    />
                    <View style={styles.listItemContainer}>
                        <Image
                            source={{
                                uri:
                                    'https://i8.mifile.cn/b2c-mimall-media/1577c2445c3eabf687645b524f0cc58a.jpg'
                            }}
                            style={styles.itemMainPic}
                        />
                        <View style={styles.itemDescCon}>
                            <Text style={styles.itemDescOne}>最高省400</Text>
                        </View>
                        <View style={styles.itemDescTwoCon}>
                            <View>
                                <Text style={styles.itemDescTwoDetail}>
                                    小米Note 3 人脸解锁
                                </Text>
                                <Text style={styles.itemDescTwoInfo}>
                                    变焦双摄， 1600万美颜自拍
                                </Text>
                            </View>
                            <View style={styles.descRightSideCon}>
                                <View style={styles.itemPriceCon}>
                                    <Text style={styles.itemPriceNow}>
                                        ¥1799
                                    </Text>
                                    <Text style={styles.itemPriceNowBegin}>
                                        起{' '}
                                    </Text>
                                    <Text style={styles.itemPriceOriginal}>
                                        ¥1999
                                    </Text>
                                </View>
                                <TouchableWithoutFeedback>
                                    <View style={styles.itemBuyButton}>
                                        <Text style={styles.itemBuyNow}>
                                            立即购买
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Image
                                source={{
                                    uri:
                                        'https://i8.mifile.cn/b2c-mimall-media/5f0396729da94a73dc670500951f504a.jpg'
                                }}
                                style={styles.itemMainPic}
                            />
                            <View style={styles.itemDescCon}>
                                <Text style={styles.itemDescOne}>
                                    立减200
                                </Text>
                            </View>
                            <View style={styles.itemDescTwoCon}>
                                <View>
                                    <Text style={styles.itemDescTwoDetail}>
                                        小米5X 变焦双摄
                                    </Text>
                                    <Text style={styles.itemDescTwoInfo}>
                                        5.5大屏轻薄全金属
                                    </Text>
                                </View>
                                <View style={styles.descRightSideCon}>
                                    <View style={styles.itemPriceCon}>
                                        <Text style={styles.itemPriceNow}>
                                            ¥1299
                                        </Text>
                                        <Text style={styles.itemPriceNowBegin}>
                                            起{' '}
                                        </Text>
                                        <Text style={styles.itemPriceOriginal}>
                                            ¥1499
                                        </Text>
                                    </View>
                                    <TouchableWithoutFeedback>
                                        <View style={styles.itemBuyButton}>
                                            <Text style={styles.itemBuyNow}>
                                                立即购买
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Image
                                source={{
                                    uri:
                                        'http://i8.mifile.cn/v1/a1/ecfc69e1-6d24-4448-1e2c-6ddf810edf0b.webp'
                                }}
                                style={styles.itemMainPic}
                            />
                            <View style={styles.itemDescCon}>
                                <Text style={styles.itemDescOne}>
                                    16GB减30
                                </Text>
                            </View>
                            <View style={styles.itemDescTwoCon}>
                                <View>
                                    <Text style={styles.itemDescTwoDetail}>
                                        红米5A 轻巧长续航
                                    </Text>
                                    <Text style={styles.itemDescTwoInfo}>
                                        8天超长待机，新增32GB版本
                                    </Text>
                                </View>
                                <View style={styles.descRightSideCon}>
                                    <View style={styles.itemPriceCon}>
                                        <Text style={styles.itemPriceNow}>
                                            ¥599
                                        </Text>
                                        <Text style={styles.itemPriceNowBegin}>
                                            起{' '}
                                        </Text>
                                        <Text style={styles.itemPriceOriginal}>
                                            ¥620
                                        </Text>
                                    </View>
                                    <TouchableWithoutFeedback>
                                        <View style={styles.itemBuyButton}>
                                            <Text style={styles.itemBuyNow}>
                                                立即购买
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                        <View style={styles.listItemContainer}>
                            <Image
                                source={{
                                    uri:
                                        'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fd14ae688f3127949bd667dd148caaf1.jpg'
                                }}
                                style={styles.itemMainPic}
                            />
                            <View style={styles.itemDescCon}>
                                <Text style={styles.itemDescOne}>
                                    最高减100
                                </Text>
                            </View>
                            <View style={styles.itemDescTwoCon}>
                                <View>
                                    <Text style={styles.itemDescTwoDetail}>
                                        红米5
                                    </Text>
                                    <Text style={styles.itemDescTwoInfo}>
                                        前置柔光自拍，骁龙处理器
                                    </Text>
                                </View>
                                <View style={styles.descRightSideCon}>
                                    <View style={styles.itemPriceCon}>
                                        <Text style={styles.itemPriceNow}>
                                            ¥749
                                        </Text>
                                        <Text style={styles.itemPriceNowBegin}>
                                            起{' '}
                                        </Text>
                                        <Text style={styles.itemPriceOriginal}>
                                            ¥799
                                        </Text>
                                    </View>
                                    <TouchableWithoutFeedback>
                                        <View style={styles.itemBuyButton}>
                                            <Text style={styles.itemBuyNow}>
                                                立即购买
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
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
