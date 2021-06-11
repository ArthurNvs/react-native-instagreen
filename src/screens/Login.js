import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/userAction'
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native'

export default props => {
    const[name, setName] = useState('@mockedName')
    const[email, setEmail] = useState(null)
    const[password, setPassword] = useState(null)

    const login = () => {
        props.navigation.navigate('Profile')
    }

    const Render = () => {
        return(
            <View style={styles.container}>
                <TextInput 
                    placeholder='Email'
                    style={styles.input}
                    placeholderTextColor='#B7D6AD'
                    autoFocus={true}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={text => setEmail(email)} />

                <TextInput 
                    placeholder='Senha'
                    style={styles.input}
                    placeholderTextColor='#B7D6AD'
                    autoFocus={true}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(password)} />
                <TouchableOpacity onPress={login} style={styles.buttom}>
                    <Text style={styles.buttomText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {
                        props.navigation.navigate('Register')
                    }} >
                    <Text style={{marginTop:20, color: 'green', fontSize: 15}}>Não tenho uma conta...</Text>
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
    input: {
        marginTop: 20,
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderColor: 'green',
        paddingLeft: 10
    }
})