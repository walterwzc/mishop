import React, { Component } from 'react'
import { 
    FlatList, 
    View, 
    Text, 
    Image,
    Dimensions,
    StatusBar,
    TextInput,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native'

import styles from './style'

import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';

export default class List extends Component {
    constructor(props) {
        super(props);

        

        this.state = {

        }
    }

    componentWillMount() {
        this.props.getCategoryListData();
    }

    render() {
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;

        const messageIcon = require('../../resource/images/main/message.png')
        const searchIcon = require('../../resource/images/main/search.png')


        const array = [];
        for (let index = 0; index < 100; index++) {
            array.push(index)
        }

        const leftPartWidth = screenWidth * (76 / 360);
        const rightPartWidth = screenWidth - leftPartWidth;

        const itemPictureWidth = rightPartWidth / 3 - 20;

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

                <View style={{flexDirection: 'row'}}>
                    <FlatList
                        style={[styles.leftPartList, {width: leftPartWidth}]}
                        data={this.props.list}
                        keyExtractor={( item ) => item.category_id}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <TouchableWithoutFeedback>
                                    <View style={styles.leftListItem}>
                                        <Text style={{fontWeight: '300'}}>{item.category_name}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        }}
                    ></FlatList>


                    <ScrollView
                        style={[styles.showListCon, {width: rightPartWidth}]} 
                    >
                        <View>
                            <Image 
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5b99564031f08b509ff7d3f96bca5c61.jpg'}}
                                resizeMode='cover'
                                style={styles.categoryPic}
                            />
                            <View style={styles.categoryTextCon}>
                                <Text style={styles.categoryText}>小米手机</Text>
                            </View>
                            <View style={styles.listDetailCon}>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/06cabb01bbe4ac5c819ee101e4446a16.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>小米MIX 2S</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>红米Note 5</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/dd2cdf91ccdadcbe9776050eebb5b437.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>红米5</Text>
                                </View>

                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/5b0e5782bbd17756bbe62b0fd0105070.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>红米5 Plus</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/95e18c104b398643101805287a00ad2b.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>小米MIX 2</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/7bb843bdb8e1f61f4567f1e2acb43262.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>小米Note 3</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{marginBottom: 0}}>
                            <View style={styles.categoryTextCon}>
                                <Text style={styles.categoryText}>电视</Text>
                            </View>
                            <View style={styles.listDetailCon}>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/f96604ca0f9aac98d0ebebdfc342fbae.jpg'}}
                                        resizeMode='contain'
                                        style={[styles.itemTVImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>50英寸 4C</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/47c6abf94d0b4575663e41b9921486be.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemTVImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>55英寸 4S</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/d41918c4caa10a259d87afc323e90196.jpg'}}
                                        resizeMode='contain'
                                        style={[styles.itemTVImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>40英寸 4A</Text>
                                </View>

                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/a7eb3eb87ba318732ef15947e781fdc3.jpg'}}
                                        resizeMode='contain'
                                        style={[styles.itemTVImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>32英寸 体育版</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/c75ebfee31a68724533c2f0d61108e06.jpg'}}
                                        resizeMode='contain'
                                        style={[styles.itemTVImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>43英寸 体育版</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/cf05e214d431795006e1073765aac9c5.jpg'}}
                                        resizeMode='contain'
                                        style={[styles.itemTVImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>50英寸 4A</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{marginBottom: 20}}>
                            <View style={styles.categoryTextCon}>
                                <Text style={styles.categoryText}>电脑</Text>
                            </View>
                            <View style={styles.listDetailCon}>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/ccad3ac9a43a21a606a392cf6a14b091.jpg'}}
                                        resizeMode='contain'
                                        style={[styles.itemTVImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>15.6 游戏本</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/dce7af666be089a9a69d23559c0d180c.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemTVImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>13.3 增强版</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/5c14cc0183352b8d6f4751a84016756c.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemTVImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>12.5 office版</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{marginBottom: 60}}>
                            <Image 
                                source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/63bd6aa32020996e9d160ef2233a21d6.jpg'}}
                                resizeMode='cover'
                                style={styles.categoryPic}
                            />
                            <View style={styles.categoryTextCon}>
                                <Text style={styles.categoryText}>小米手机</Text>
                            </View>
                            <View style={styles.listDetailCon}>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/06cabb01bbe4ac5c819ee101e4446a16.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>小米MIX 2S</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/95e18c104b398643101805287a00ad2b.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>小米MIX 2</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/7bb843bdb8e1f61f4567f1e2acb43262.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>小米Note 3</Text>
                                </View>

                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0ed187521ff28e6616798c1c990c1788.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>小米手机</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/f50a66098acdec2fa16e5d30a7f50769.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>小米5X</Text>
                                </View>
                                <View style={styles.listItemCon}>
                                    <Image
                                        source={{uri: 'http://i8.mifile.cn/b2c-mimall-media/88bc9af6c3bd4e7a695060fe628971e8.png'}}
                                        resizeMode='contain'
                                        style={[styles.itemImage, {width: itemPictureWidth}]}
                                    ></Image>
                                    <Text style={styles.itemText}>小米Max 2</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                </View>
                <View style={{height: 50, width: '100%', backgroundColor: '#ddd'}}></View>
            </View>
        )
    }
}
