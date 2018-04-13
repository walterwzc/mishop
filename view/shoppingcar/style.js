import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

export default StyleSheet.create({
    recomandContainer: {
        backgroundColor: '#fff'
    },

    shoppingCarHeader: {
        height: 50,
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#dcdcdc',
        borderBottomWidth: 1
    },

    shoppingCarText: {
        fontSize: 18
    },

    shoppingCarMessage: {
        width: 21,
        height: 21,
        position: 'absolute',
        top: 15,
        right: 10
    },

    emptyShoppingCarCon: {
        height: 72,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    shoppingCarImage: {
        width: 28,
        height: 28,
        marginRight: 12
    },

    emptyShoppingCarText: {
        color: '#bfbfbf',
        marginRight: 10
    },

    goShopping: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 6,
        paddingRight: 6,
        borderColor: '#dfdfdf',
        borderWidth: 1
    },

    guessYouLikeCon: {
        height: 60,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center'
    },

    guessYouLikeText: {
        fontSize: 18,
        color: '#ff6a00'
    },

    borderLineLeft: {
        width: 88,
        height: 10,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        marginRight: 10
    },

    borderLineRight: {
        width: 88,
        height: 10,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        marginLeft: 10
    },

    recomandCon: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    recomandItemImage: {
        width: screenWidth / 2 - 1,
        height: 160
    },

    itemTitle: {
        marginLeft: 10,
        marginTop: 11
    },

    itemPriceCon: {
        marginLeft: 10,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 8
    },

    itemSymbolRMB: {
        color: '#ec774b',
        fontSize: 12,
        paddingTop: 2
    },

    itemNowPrice: {
        fontSize: 18,
        color: '#ec774b',
        marginRight: 6
    },

    itemOriginalPrice: {
        textAlignVertical: 'bottom',
        paddingBottom: 1,
        color: '#d2d2d2',
        textDecorationLine: 'line-through'
    },
})
