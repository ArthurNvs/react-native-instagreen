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
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB'
    },

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        margin: 5
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'Futura',
        fontSize: 28,
        height: 30
    }
})