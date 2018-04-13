import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    listTwoPicCon: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },

    twoPicStyle: {
        width: screenWidth / 2 - 2,
        height: screenWidth / 2 - 2
    },

    listDescCon: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 8
    },

    listDescTitle: {
        fontSize: 16
    },

    listDescDetail: {
        color: '#b0b0b0',
        fontSize: 14,
        marginBottom: 8
    },

    listPriceCon: {
        flexDirection: 'row',
        marginBottom: 5
    },

    listPriceColor: {
        color: '#ed5b00'
    },

    listPriceBegin: {
        color: '#ed5b00',
        fontSize: 10,
        textAlignVertical: 'bottom',
        paddingBottom: 2,
        marginRight: 5
    },

    listPriceOriginal: {
        color: '#b0b0b0',
        fontSize: 12,
        textDecorationLine: 'line-through'
    },

    
})

export default styles
