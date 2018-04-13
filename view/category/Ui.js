import React, { Component } from 'react'
import { FlatList, View, Text, Image } from 'react-native'
import styles from './style'

export default class List extends Component {
    static navigationOptions = {
        title: '分类',
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }

    render() {
        return (
            <Text>分类</Text>
        )
    }

    componentDidMount() {
        this.props.getListData()
    }
}
