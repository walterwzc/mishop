import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
        alignItems: 'center',
        backgroundColor: '#fafafa',
        marginBottom: 10
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

    // list style:
    leftPartList: {
        borderTopColor: '#d9d9d9',
        borderTopWidth: 1,
        borderRightColor: '#d9d9d9',
        borderRightWidth: 1,
        marginBottom: 50
    },

    leftListItem: {
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 12
    },

    showListCon: {
        borderTopColor: '#d9d9d9',
        borderTopWidth: 1,
        paddingLeft: 16,
        paddingRight: 16
    },

    categoryPic: {
        width: '100%',
        height: 100
    },

    categoryTextCon: {
        marginTop: 25,
        alignItems: 'center'
    },

    categoryText: {
        color: '#767676'
    },

    listDetailCon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },

    listItemCon: {
        alignItems: 'center'
    },

    itemImage: {
        height: 68,
        marginBottom: 20,
        marginTop: 25
    },

    itemTVImage: {
        height: 68,
        marginBottom: 15,
        marginTop: 15
    },

    itemText: {
        fontSize: 13, 
        color: '#a4a4a4'
    },


})

export default styles
