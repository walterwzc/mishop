import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

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
        left: 46,
        top: 8
        // paddingLeft: 10
    },
    searchInputView: {
        // width: 273,
        height: 31,
        flex: 1,
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
        paddingLeft: 32
    },
    qrCodeIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        marginRight: 6
    },

    // Nav
    // navbar: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     height: 33
    // },

    // Swiper
    wrapperDot: {
        backgroundColor: 'rgba(255, 255, 255, .5)',
        width: 8,
        height: 8,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },

    activatedDot: {
        backgroundColor: 'transparent',
        width: 10,
        height: 10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },

    paginationStyle: {
        position: 'absolute',
        left: null,
        right: 10
    },

    wrapper: {
        width: '100%',
        height: 180
    },

    slide: {
        justifyContent: 'center',
        backgroundColor: 'transparent',
        alignItems: 'center'
    },

    swiperImage: {
        width: Dimensions.get('window').width,
        height: 180
        // flex: 1
    },

    // activity:
    activity: {
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },

    // 重磅热卖
    hotSale: {
        width: screenWidth,
        height: 100
    },

    // 热卖列表页：
    listItemContainer: {
        width: '100%',
        backgroundColor: '#fee8d0'
    },

    itemMainPic: {
        width: screenWidth - 20,
        height: 230,
        marginLeft: 10
    },

    itemDescCon: {
        width: 43,
        height: 43,
        borderRadius: 30,
        backgroundColor: '#fa4f4d',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        position: 'absolute',
        top: 175,
        right: 20
    },

    itemDescOne: {
        padding: 4,
        fontWeight: 'bold',
        fontSize: 12,
        color: '#fff',
        textAlign: 'center'
    },

    itemDescTwoCon: {
        width: screenWidth - 20,
        height: 80,
        marginLeft: 10,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },

    itemDescTwoDetail: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 35,
        paddingLeft: 13,
        paddingTop: 10
    },

    itemDescTwoInfo: {
        paddingLeft: 13
    },

    descRightSideCon: {
        position: 'absolute',
        right: 15
    },

    itemPriceCon: {
        flexDirection: 'row',
        marginTop: 11,
        marginBottom: 5
    },

    itemPriceNow: {
        fontSize: 16,
        color: '#ea625b',
        textAlignVertical: 'bottom',
        marginLeft: 10
    },

    itemPriceNowBegin: {
        fontSize: 11,
        textAlignVertical: 'bottom',
        paddingBottom: 2
    },

    itemPriceOriginal: {
        fontSize: 11,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'double',
        textAlignVertical: 'bottom',
        paddingBottom: 2
    },

    itemBuyButton: {
        width: 108,
        height: 30,
        backgroundColor: '#ea625b',
        borderRadius: 2
    },

    itemBuyNow: { 
        color: '#fff', 
        lineHeight: 30, 
        textAlign: 'center' 
    }
})

export default styles
