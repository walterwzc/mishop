import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        // flex: 1
        height: '100%',
        justifyContent: 'flex-start'
    },

    // Top Header:
    topHeader: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginTop: 10,
        alignItems: 'center'
    },
    messageIcon: {
        height: 20,
        width: 20,
        marginLeft: 6,
        marginRight: 10
    },
    searchIcon: {
        height: 15,
        width: 15,
        position: 'absolute',
        left: 35,
        top: 8
        // paddingLeft: 10
    },
    searchInputView: {
        // width: 273,
        height: 31,
        flex: 1,
        marginLeft: 18,
        borderTopWidth: 1,
        borderTopColor: '#d6d6d6',
        borderRightWidth: 1,
        borderRightColor: '#d6d6d6',
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6',
        borderLeftWidth: 1,
        borderLeftColor: '#d6d6d6',
        borderRadius: 5
    },
    searchInput: {
        paddingLeft: 35
    },
    qrCodeIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        marginRight: 6
    },

    // activity:
    activity: {
        marginTop: 8,
        paddingBottom: 8,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    }
})
