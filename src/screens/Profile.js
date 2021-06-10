import React from 'react'
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'

export default props => {

    const logout = () => {}

    const Render = () => {
        const options = { email: 'mestredosdisfarces@bol.com', secure: true }

        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}> Gesonel dos Disfarces </Text>
                <Text style={styles.email}> mestredosdisfarces@bol.com </Text>
                <TouchableOpacity onPress={logout} style={styles.buttom}>
                    <Text style={styles.buttomText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return <Render />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
    },
    email: {
        marginTop: 20,
        fontSize: 25
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: 'green'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    }
})