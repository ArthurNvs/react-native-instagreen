import React from 'react'
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'
import {
    StyleSheet,
    View,
    Text,
    Platform,
    Image
} from 'react-native'
import logo from '../../assets/imgs/logo.png'

const Header = props => {
    const name = props.name || 'visitante'

    const GravatarRender = () => {
       return props.email ? <Gravatar options ={{email: props.email, secure: true}} style={styles.avatar} /> : null
    } 

    const Render = () => (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image source={logo} style={styles.image} />
                <Text style={styles.title}> InstaGreen </Text>
            </View>
            <View style={styles.userContainter}>
                <Text style={styles.user}>{name}</Text>
                <GravatarRender />
            </View>
        </View>
    )

    return <Render />
}

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    }
}

export default connect(mapStateToProps)(Header)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
        //height: 40
        // borderBottomWidth: 1,
        // borderColor: 'black'
    },
    userContainter:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 30 : 0,
    },
    user: {
        fontSize: 10,
        color: 'green'
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10,
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