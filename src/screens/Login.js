import React, { useState } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInpu,
    TextInput
} from 'react-native'

export default props => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const login = () => {
        props.navigation.navigate('Profile')
    }

    const Render = () => {
        return(
            <View style={styles.container}>
                <TextInput 
                    placeholder='Email'
                    style={styles.input}
                    autoFocus={true}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={text => setEmail(email)} />

                <TextInput 
                    placeholder='Senha'
                    style={styles.input}
                    autoFocus={true}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(password)} />
                <TouchableOpacity onPress={login} style={styles.buttom}>
                    <Text style={styles.buttomText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.buttom}>
                    <Text style={styles.buttomText}>Não tenho uma conta...</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return <Render />
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: 'black'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: 'black'
    }
})