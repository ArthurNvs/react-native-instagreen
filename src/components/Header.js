import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Platform,
    Image,
    SafeAreaView
} from 'react-native'
import logo from '../../assets/imgs/logo.png'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image source={logo} style={styles.image} />
                <Text style={styles.title}> InstaGreen </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        //height: 40
        // borderBottomWidth: 1,
        // borderColor: 'black'
    },

    rowContainer: {
        marginTop: Platform.OS === 'ios' ? 30 : 0,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: 'green',
        fontFamily: 'Futura',
        fontSize: 28,
    }
})