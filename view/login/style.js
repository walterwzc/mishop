import { 
    StyleSheet, 
    Dimensions,
    PixelRatio,
} from 'react-native'

const screenWidth = Dimensions.get('window').width

export default StyleSheet.create({
    guessYouLikeCon: {
        height: 60,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    borderLineLeft: {
        width: 88,
        height: 10,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 1,
        marginRight: 10
    },

    borderLineRight: {
        width: 88,
        height: 10,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 1,
        marginLeft: 10
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    innerContainer: {
        // borderRadius: 10,
        alignItems: 'center',
        // backgroundColor: '#fff'
    },

    row: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20
    }
});