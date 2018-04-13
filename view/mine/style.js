import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

export default StyleSheet.create({
    mineContainer: {
        backgroundColor: '#fff'
    },

    topHeader: {
        height: 88,
        backgroundColor: '#f37d0f',
        flexDirection: 'row'
    },

    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginTop: 20,
        marginLeft: 20
    },

    userLogin: {
        lineHeight: 88,
        color: '#fff',
        marginLeft: 10
    },

    userMessage: {
        width: 21,
        height: 21,
        position: 'absolute',
        top: 20,
        right: 10
    },

    myOrderCon: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1
    },

    myOrder: {
        lineHeight: 40,
        fontSize: 16,
        marginLeft: 15
    },

    userWholeOrder: {
        lineHeight: 40,
        color: '#8a8a8a'
    },

    rightArrow: {
        height: 20,
        width: 20,
        marginTop: 10,
        marginRight: 8,
        marginLeft: 3
    },

    userServiceCon: {
        height: 89,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    serviceItem: {
        alignItems: 'center'
    },

    serviceImage: {
        width: 25,
        height: 25
    },

    serviceText: {
        fontSize: 12,
        fontWeight: '100',
        marginTop: 10
    },

    serviceAd: {
        borderBottomWidth: 8,
        borderBottomColor: '#f5f5f5'
    },

    serviceAdImage: {
        width: screenWidth,
        height: 100
    },

    // detail server
    detailServiceCon: {
        height: 53,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#d6d6d6',
        borderBottomWidth: 1
    },

    itemLeftCon: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    itemLeftImage: {
        width: 30,
        height: 30,
        marginLeft: 17,
        marginRight: 18
    },

    serviceRightArrow: {
        height: 20,
        width: 20,
        marginRight: 8,
        marginLeft: 3
    },

    detailServiceConWithBorder: {
        height: 61,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#d6d6d6',
        borderBottomWidth: 8,
        borderBottomColor: '#f5f5f5'
    },

    
})
