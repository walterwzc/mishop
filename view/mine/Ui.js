import React, { Component } from 'react'
import { 
    View, 
    Text, 
    ScrollView,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native'

import styles from './style'

class Mine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const screenWidth = Dimensions.get('window').width;

        return (
            <ScrollView style={styles.mineContainer}>
                <View style={styles.topHeader}>
                    <Image 
                        source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c52c11c915d43e0ac3286161eec4fcaf.jpg'}}
                        style={styles.userAvatar}
                    ></Image>
                    <TouchableWithoutFeedback
                        onPress={() => { this.props.navigate('Login') }}
                    >
                        <View>
                            <Text style={styles.userLogin}>登录/注册</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Image 
                        source={require('../../resource/images/main/message2.png')} 
                        style={styles.userMessage}
                    />
                </View>
                <View style={styles.myOrderCon}>
                    <Text style={styles.myOrder}>我的订单</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.userWholeOrder}>全部订单</Text>
                        <Image 
                            source={require('../../resource/images/main/ico-right-arrow.png')}
                            style={styles.rightArrow}
                        ></Image>
                    </View>
                </View>
                <View style={styles.userServiceCon}>
                    <View style={styles.serviceItem}>
                        <Image 
                            source={require('../../resource/images/main/payment.png')}
                            style={styles.serviceImage}
                        ></Image>
                        <Text style={styles.serviceText}>待付款</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Image 
                            source={require('../../resource/images/main/truck.png')}
                            style={styles.serviceImage}
                        ></Image>
                        <Text style={styles.serviceText}>待收货</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Image 
                            source={require('../../resource/images/main/comment.png')}
                            style={styles.serviceImage}
                        ></Image>
                        <Text style={styles.serviceText}>待评价</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Image 
                            source={require('../../resource/images/main/wrench.png')}
                            style={styles.serviceImage}
                        ></Image>
                        <Text style={styles.serviceText}>退换修</Text>
                    </View>
                </View>
                <View style={styles.serviceAd}>
                    <Image
                        source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/2bf3d8b9aa40e08f8218a1899340adf8.jpg?bg=FFFFFF'}}
                        style={styles.serviceAdImage}
                    ></Image>
                </View>

                {/* Detail Service */}
                <View style={styles.detailServiceCon}>
                    <View style={styles.itemLeftCon}>
                        <Image 
                            source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/4c0bd7e4f873eed62871963c9d01e1ef.png'}}
                            style={styles.itemLeftImage}
                        ></Image>
                        <Text>优惠券</Text>
                    </View>
                    <Image 
                        source={require('../../resource/images/main/ico-right-arrow.png')}
                        style={styles.serviceRightArrow}
                    ></Image>
                </View>
                <View style={styles.detailServiceCon}>
                    <View style={styles.itemLeftCon}>
                        <Image 
                            source={{uri: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7590c92654f45b26ef1f23d458824bef.png'}}
                            style={styles.itemLeftImage}
                        ></Image>
                        <Text>会员中心</Text>
                    </View>
                    <Image 
                        source={require('../../resource/images/main/ico-right-arrow.png')}
                        style={styles.serviceRightArrow}
                    ></Image>
                </View>
                <View style={styles.detailServiceConWithBorder}>
                    <View style={styles.itemLeftCon}>
                        <Image 
                            source={{uri: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c2976af584b7d42866b1dd66596c24d7.png'}}
                            style={styles.itemLeftImage}
                        ></Image>
                        <Text>我的钱包</Text>
                    </View>
                    <Image 
                        source={require('../../resource/images/main/ico-right-arrow.png')}
                        style={styles.serviceRightArrow}
                    ></Image>
                </View>

                <View style={styles.detailServiceCon}>
                    <View style={styles.itemLeftCon}>
                        <Image 
                            source={{uri: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e20b4b99f2be1f32cfdd7a0c6e54e956.png'}}
                            style={styles.itemLeftImage}
                        ></Image>
                        <Text>服务中心</Text>
                    </View>
                    <Image 
                        source={require('../../resource/images/main/ico-right-arrow.png')}
                        style={styles.serviceRightArrow}
                    ></Image>
                </View>
                <View style={styles.detailServiceCon}>
                    <View style={styles.itemLeftCon}>
                        <Image 
                            source={{uri: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5612a6d241171f7d52171f03ad859632.jpg'}}
                            style={styles.itemLeftImage}
                        ></Image>
                        <Text>小米之家</Text>
                    </View>
                    <Image 
                        source={require('../../resource/images/main/ico-right-arrow.png')}
                        style={styles.serviceRightArrow}
                    ></Image>
                </View>
                <View style={styles.detailServiceCon}>
                    <View style={styles.itemLeftCon}>
                        <Image 
                            source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/c124093509079aa4650ec9ab3e9ad04a.png'}}
                            style={styles.itemLeftImage}
                        ></Image>
                        <Text>小米小店</Text>
                    </View>
                    <Image 
                        source={require('../../resource/images/main/ico-right-arrow.png')}
                        style={styles.serviceRightArrow}
                    ></Image>
                </View>
                <View style={styles.detailServiceConWithBorder}>
                    <View style={styles.itemLeftCon}>
                        <Image 
                            source={{uri: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5bb382c5bfa461442a75ace48a046b06.png'}}
                            style={styles.itemLeftImage}
                        ></Image>
                        <Text>更多功能</Text>
                    </View>
                    <Image 
                        source={require('../../resource/images/main/ico-right-arrow.png')}
                        style={styles.serviceRightArrow}
                    ></Image>
                </View>
                <View style={styles.detailServiceCon}>
                    <View style={styles.itemLeftCon}>
                        <Image 
                            source={{uri: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/36e0473c6b0a2d9220de7180e733d787.png'}}
                            style={styles.itemLeftImage}
                        ></Image>
                        <Text>设置</Text>
                    </View>
                    <Image 
                        source={require('../../resource/images/main/ico-right-arrow.png')}
                        style={styles.serviceRightArrow}
                    ></Image>
                </View>
            </ScrollView>
        )
    }
}

export default Mine
