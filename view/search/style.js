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
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    leftArrowCon: {
        height: 31,
        marginLeft: 10,
        justifyContent: 'center',
        marginRight: -17,
        borderTopWidth: 1,
        borderTopColor: '#d6d6d6',
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6',
        borderLeftWidth: 1,
        borderLeftColor: '#d6d6d6',
        paddingLeft: 10,
    },
    leftArrow: {
        height: 20,
        width: 20,
    },
    searchInputView: {
        marginLeft: 10,
        height: 31,
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#d6d6d6',
        borderRightWidth: 1,
        borderRightColor: '#d6d6d6',
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6',
        borderRadius: 3
    },
    searchInput: {
        paddingLeft: 32
    },

    hotSearch: {
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 18,
        fontWeight: '500'
    },

    searchAdImage: {
        width: screenWidth,
        height: 100
    },

    hotSearchCon: {
        marginLeft: 20,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    searchStyle: {
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 10,
        marginBottom: 10,
    },

    text: {
        color: '#484848'
    },


})
