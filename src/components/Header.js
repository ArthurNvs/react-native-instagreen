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
        backgroundColor: 'green',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB'
    },

    rowContainer: {
        marginTop: Platform.OS === 'ios' ? 30 : 0,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#B7D6AD',
        fontFamily: 'Futura',
        fontSize: 28,
    }
})