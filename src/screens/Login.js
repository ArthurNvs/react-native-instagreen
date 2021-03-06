import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/userAction'
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import logo from '../../assets/imgs/logo.png'

const Login = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        props.onLogin({ name: '@mocked', email, password })
        props.navigation.navigate('Profile')
    }

    return (
            <View style={styles.container}>
                <LinearGradient 
                    colors={['#10D500', '#24951B', '#0C7404']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.background}>
                    <View style={styles.inputContainer}>
                    <Image source={logo} style={styles.image} />
                    <Text style={styles.title}> InstaGreen </Text>
                        <TextInput 
                            placeholder='Email'
                            style={styles.input}
                            placeholderTextColor='#B7D6AD'
                            autoFocus={true}
                            value={email.toLowerCase().trim()}
                            onChangeText={setEmail} />
                        <TextInput 
                            placeholder='Senha'
                            style={styles.input}
                            placeholderTextColor='#B7D6AD'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword} />
                        <TouchableOpacity onPress={login} style={styles.buttom}>
                            <Text style={styles.buttomText}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {
                                props.navigation.navigate('Register')}} >
                        <Text style={{marginTop:20, color: 'white', fontSize: 15}}>Ainda n??o tenho uma conta...</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    inputContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
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
        borderBottomColor: 'white',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        paddingLeft: 10,
        fontWeight: 'bold',
        color: '#FFF'
    },
    background: {
        flex: 1,
    },
    title: {
        color: '#FFF',
        fontFamily: 'Futura',
        fontSize: 35,
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)