import React, { Component } from 'react'
import { Image, AsyncStorage } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import { View as Main } from '../main/'
import { View as Category } from '../category/'
import { View as Discovery } from '../discovery/'
import { View as ShoppingCar } from '../shoppingcar/'
import { View as Mine } from '../mine/'

export default class Home extends React.Component {

    // 通过设置 navigationOptions 的 height为0，statusBar 的高度为0， 而不是设置Statusbar
    // static navigationOptions = {
    //     headerStyle: {
    //         backgroundColor: '#000',
    //         height: 0
    //     }
    // }

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.props.selectedTab === 'main'}
                    title="首页"
                    renderIcon={() => (
                        <Image
                            source={{
                                uri:
                                    'http://i8.mifile.cn/v1/a1/7a7d0ce7-3859-b188-424d-a0695f5eef0e.png'
                            }}
                            style={{ width: 20, height: 20 }}
                        />
                    )}
                    onPress={() => this.props.changeSelectedTab('main')}
                >
                    <Main navigate={this.props.navigation.navigate} />
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.props.selectedTab === 'category'}
                    title="分类"
                    renderIcon={() => (
                        <Image
                            source={{
                                uri:
                                    'http://i8.mifile.cn/v1/a1/461abe53-55e2-eb46-4817-7909ecd1e2a6.png'
                            }}
                            style={{ width: 20, height: 20 }}
                        />
                    )}
                    onPress={() => this.props.changeSelectedTab('category')}
                >
                    <Category />
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.props.selectedTab === 'discovery'}
                    title="发现"
                    renderIcon={() => (
                        <Image
                            source={{
                                uri:
                                    'http://i8.mifile.cn/v1/a1/152f3bf2-6218-0414-c0c6-a0adfaf4d410.png'
                            }}
                            //  overflow: visible, zIndex: 99
                            style={{ width: 20, height: 20 }}
                        />
                    )}
                    onPress={() => this.props.changeSelectedTab('discovery')}
                >
                    <Discovery />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.props.selectedTab === 'shoppingcar'}
                    title="购物车"
                    renderIcon={() => (
                        <Image
                            source={{
                                uri:
                                    'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3e27c233eb5b853fe5de42e5d3ce6f68.png'
                            }}
                            style={{ width: 20, height: 20 }}
                        />
                    )}
                    onPress={() => this.props.changeSelectedTab('shoppingcar')}
                >
                    <ShoppingCar navigate={this.props.navigation.navigate} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.props.selectedTab === 'mine'}
                    title="我的"
                    renderIcon={() => (
                        <Image
                            source={{
                                uri:
                                    'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0a801110e3a081836b32ba24046415c6.png'
                            }}
                            style={{ width: 20, height: 20 }}
                        />
                    )}
                    onPress={() => this.props.changeSelectedTab('mine')}
                >
                    <Mine navigate={this.props.navigation.navigate} />
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}
