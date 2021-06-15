import React, { useEffect, useRef, useState } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'

export default props => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const Render = () => {
        return (
            <View style={styles.container}>
                <Text>{password}</Text>
                <Text style={styles.title}> Faça seu cadastro </Text>
                <TextInput 
                    placeholder='Nome'
                    style={styles.input}
                    placeholderTextColor='#B7D6AD'
                    autoFocus={true}
                    onChangeText={text => setName(text)} 
                    value={name} />
                <TextInput 
                    placeholder='Email'
                    style={styles.input}
                    placeholderTextColor='#B7D6AD'
                    autoFocus={true}
                    onChangeText={text => setEmail(text)}
                    value={email} />
                <TextInput 
                    placeholder='Senha'
                    style={styles.input}
                    autoFocus={true}
                    placeholderTextColor='#B7D6AD'
                    secureTextEntry={true}
                    onChangeText={psw => setPassword(psw)} 
                    value={password} />
                <TouchableOpacity onPress={() => {}} style={styles.buttom}>
                    <Text style={styles.buttomText}>Enviar</Text>
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
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 10
    },
    buttomText: {
        fontSize: 20,
        color: 'white'
    },
    input:{
        marginTop: 20,
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderColor: 'green',
        paddingLeft: 10,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
    title: {
        color: 'green',
        fontFamily: 'Futura',
        fontSize: 28,
    }
})