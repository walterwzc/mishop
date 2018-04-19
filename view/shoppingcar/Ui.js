import React, { Component } from 'react'
import { 
    View, 
    Text, 
    Image,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native'

import styles from './style'

class ShoppingCar extends Component {
    render() {
        return (
            <View style={styles.recomandContainer}>
                <View style={styles.shoppingCarHeader}>
                    <Text style={styles.shoppingCarText}>购物车</Text>
                    <Image
                        source={require('../../resource/images/main/message.png')}
                        style={styles.shoppingCarMessage}
                    ></Image>
                </View>
                <ScrollView>
                    <View style={styles.emptyShoppingCarCon}>
                        <Image
                            source={require('../../resource/images/main/shoppingcar.png')}
                            style={styles.shoppingCarImage}
                        ></Image>
                        <Text
                            style={styles.emptyShoppingCarText}    
                        >购物车还是空的</Text>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.props.navigate('Home')
                                this.props.changeSelectedTab('main');
                            }}
                        >
                            <View style={styles.goShopping}>
                                <Text>去逛逛</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.guessYouLikeCon}>
                        <Text style={styles.guessYouLikeText}>猜你喜欢</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.borderLineLeft}>
                                <Text>                    </Text>
                            </View>
                            <Text style={{color: '#7c7c7c'}}>实时推荐你的心心念念</Text>
                            <View style={styles.borderLineRight}>
                                <Text>                    </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.recomandCon}>
                        <View>
                            <Image 
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b3579bd710432ba996e6dcaeb4fee38.jpg'}}
                                style={styles.recomandItemImage}>
                            </Image>
                            <View>
                                <Text style={styles.itemTitle}>小米电视4A 50英寸</Text>
                                <View style={styles.itemPriceCon}>
                                    <Text style={styles.itemSymbolRMB}>¥</Text>
                                    <Text style={styles.itemNowPrice}>1999</Text>
                                    <Text style={styles.itemOriginalPrice}>¥2199</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Image 
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aa2a202be3aa737a5f3444fe0f864669.jpg'}}
                                style={styles.recomandItemImage}>
                            </Image>
                            <View>
                                <Text style={styles.itemTitle}>小米电视4A 43英寸</Text>
                                <View style={styles.itemPriceCon}>
                                    <Text style={styles.itemSymbolRMB}>¥</Text>
                                    <Text style={styles.itemNowPrice}>1599</Text>
                                    <Text style={styles.itemOriginalPrice}>¥1799</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.recomandCon}>
                        <View>
                            <Image 
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7cdcc60f73dad18c272f838416c7cf8c.jpg'}}
                                style={styles.recomandItemImage}>
                            </Image>
                            <View>
                                <Text style={styles.itemTitle}>12.5 笔记本Air 128GB 金色</Text>
                                <View style={styles.itemPriceCon}>
                                    <Text style={styles.itemSymbolRMB}>¥</Text>
                                    <Text style={styles.itemNowPrice}>3599</Text>
                                    <Text style={styles.itemOriginalPrice}>¥3799</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Image 
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0fb6b59c651292f594782634fd92d791.jpg'}}
                                style={styles.recomandItemImage}>
                            </Image>
                            <View>
                                <Text style={styles.itemTitle}>15.6 笔记本i7 8GB</Text>
                                <View style={styles.itemPriceCon}>
                                    <Text style={styles.itemSymbolRMB}>¥</Text>
                                    <Text style={styles.itemNowPrice}>5999</Text>
                                    <Text style={styles.itemOriginalPrice}>¥6399</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.recomandCon}>
                        <View>
                            <Image 
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17b0c7845e7ca475ce71f7a9f2bf49fa.jpg'}}
                                style={styles.recomandItemImage}>
                            </Image>
                            <View>
                                <Text style={styles.itemTitle}>米家 LED 智能台灯</Text>
                                <View style={styles.itemPriceCon}>
                                    <Text style={styles.itemSymbolRMB}>¥</Text>
                                    <Text style={styles.itemNowPrice}>149</Text>
                                    <Text style={styles.itemOriginalPrice}>¥169</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Image 
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/021072b28067c5a502570a6a259cdf2c.jpg'}}
                                style={styles.recomandItemImage}>
                            </Image>
                            <View>
                                <Text style={styles.itemTitle}>小米圈铁耳机Pro</Text>
                                <View style={styles.itemPriceCon}>
                                    <Text style={styles.itemSymbolRMB}>¥</Text>
                                    <Text style={styles.itemNowPrice}>129</Text>
                                    <Text style={styles.itemOriginalPrice}>¥149</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.recomandCon}>
                        <View>
                            <Image 
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05d619bf57ced034023b8eee8ca4b91f.jpg'}}
                                style={styles.recomandItemImage}>
                            </Image>
                            <View>
                                <Text style={styles.itemTitle}>小米米家电动滑板车</Text>
                                <View style={styles.itemPriceCon}>
                                    <Text style={styles.itemSymbolRMB}>¥</Text>
                                    <Text style={styles.itemNowPrice}>1899</Text>
                                    <Text style={styles.itemOriginalPrice}>¥1999</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Image 
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/edd515f833a5c4f38ef22d940f14a033.jpg'}}
                                style={styles.recomandItemImage}>
                            </Image>
                            <View>
                                <Text style={styles.itemTitle}>小米运动蓝牙耳机</Text>
                                <View style={styles.itemPriceCon}>
                                    <Text style={styles.itemSymbolRMB}>¥</Text>
                                    <Text style={styles.itemNowPrice}>129</Text>
                                    <Text style={styles.itemOriginalPrice}>¥149</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.recomandCon}>
                        <View>
                            <Image 
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b5844f7bb12a6e9a36c8523a80a6819b.jpg'}}
                                style={styles.recomandItemImage}>
                            </Image>
                            <View>
                                <Text style={styles.itemTitle}>米动手表青春版</Text>
                                <View style={styles.itemPriceCon}>
                                    <Text style={styles.itemSymbolRMB}>¥</Text>
                                    <Text style={styles.itemNowPrice}>369</Text>
                                    <Text style={styles.itemOriginalPrice}>¥399</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Image 
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fdb1cdd04ed5278425d8ab86746acddf.jpg'}}
                                style={styles.recomandItemImage}>
                            </Image>
                            <View>
                                <Text style={styles.itemTitle}>米家恒温电水壶</Text>
                                <View style={styles.itemPriceCon}>
                                    <Text style={styles.itemSymbolRMB}>¥</Text>
                                    <Text style={styles.itemNowPrice}>179</Text>
                                    <Text style={styles.itemOriginalPrice}>¥199</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 60}}></View>
                </ScrollView>
            </View>
        )
    }
}

export default ShoppingCar
