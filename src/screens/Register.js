import React, { useState } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'

export default props => {
    const[name, setName] = useState(null)
    const[email, setEmail] = useState(null)
    const[password, setPassword] = useState(null)

    const Render = () => {
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder='Nome'
                    style={styles.input}
                    placeholderTextColor='#B7D6AD'
                    autoFocus={true}
                    value={name}
                    onChangeText={text => (name)} />

                <TextInput 
                    placeholder='Email'
                    style={styles.input}
                    placeholderTextColor='#B7D6AD'
                    autoFocus={true}
                    value={email}
                    onChangeText={text => (email)} />

                <TextInput 
                    placeholder='Senha'
                    style={styles.input}
                    placeholderTextColor='#B7D6AD'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => (password)} />

                <TouchableOpacity onPress={() => {}} style={styles.buttom}>
                    <Text style={styles.buttomText}>Salvar</Text>
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
        justifyContent: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: 'green'
    },
    buttomText: {
        fontSize: 20,
        color: 'white'
    },
    input:{
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: 'green',
        paddingLeft: 10
    }
})