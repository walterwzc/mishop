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

const leftArrow = require('../../resource/images/main/ico-left-arrow.png')

export default class SearchPage extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        // console.log(this.props.navigation)

        return (
            <View style={[styles.container, { backgroundColor: '#fff' }]}>
                <StatusBar barStyle="light-content" />
                <View style={styles.topHeader}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            // alert('pressed');
                            this.props.navigation.goBack()
                        }}
                    >
                        <View style={styles.leftArrowCon}>
                            <Image source={leftArrow} style={styles.leftArrow} />
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.searchInputView}>
                            <TextInput
                                style={styles.searchInput}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <TouchableWithoutFeedback>
                            <View style={{marginLeft: 10, marginRight: 35}}>
                                <Text>搜索</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View>
                    <Text style={styles.hotSearch}>热门搜索</Text>
                    <Image
                        source={{uri: 'https://i8.mifile.cn/b2c-mimall-media/2bf3d8b9aa40e08f8218a1899340adf8.jpg?bg=FFFFFF'}}
                        style={styles.searchAdImage}
                    ></Image>
                    <View style={styles.hotSearchCon}>
                        <View style={[styles.searchStyle, {backgroundColor: '#e4f5e2', borderColor: '#97c28a', borderWidth: 1}]}>
                            <Text style={styles.text}>红米Note5</Text>
                        </View>
                        <View style={[styles.searchStyle, {backgroundColor: '#f9eaea', borderColor: '#fca0a7', borderWidth: 1}]}>
                            <Text style={styles.text}>净水器厨下</Text>
                        </View>
                        <View style={[styles.searchStyle, {backgroundColor: '#e8f6f6', borderColor: '#8cdade', borderWidth: 1}]}>
                            <Text style={styles.text}>小米MIX2</Text>
                        </View>
                        <View style={[styles.searchStyle, {backgroundColor: '#f8f2ec', borderColor: '#fac288', borderWidth: 1}]}>
                            <Text style={styles.text}>小米笔记本Pro</Text>
                        </View>
                        <View style={[styles.searchStyle, {backgroundColor: '#fae8e8', borderColor: '#e3af96', borderWidth: 1}]}>
                            <Text style={styles.text}>小米短袖T恤</Text>
                        </View>
                        <View style={[styles.searchStyle, {backgroundColor: '#f2f6e9', borderColor: '#bbd090', borderWidth: 1}]}>
                            <Text style={styles.text}>车载充电器快充版拓展套装</Text>
                        </View>
                        <View style={[styles.searchStyle, {backgroundColor: '#f8f2ec', borderColor: '#fac288', borderWidth: 1}]}>
                            <Text style={styles.text}>《小米》会刊</Text>
                        </View>
                        <View style={[styles.searchStyle, {backgroundColor: '#f9eaea', borderColor: '#fca0a7', borderWidth: 1}]}>
                            <Text style={styles.text}>墙壁开关</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}