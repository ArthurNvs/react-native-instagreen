import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/postsAction'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'
import { launchImageLibrary} from 'react-native-image-picker';

const noUser = 'Entre para postar suas imagens!'

const AddPhoto = props => {
    const[image, setImage] = useState({})
    const[comment, setComment] = useState('')

    const libraryLaunch = () => {
        if(!props.name) {
            Alert.alert('Opaa..', noUser)
            return
        }

        let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
        }

        launchImageLibrary(options, res => {
          if (res.didCancel) {
            console.log('User cancelled image picker')
          } else {
            setImage({
                filePath: res.assets,
                fileData: res,
                fileUri: res.assets
            })
          }
        })
    }

    const save = async () => {
        if(!props.name) {
            Alert.alert('Opaa..', noUser)
            return
        }

        props.onAddPost({
            id: Math.random(),
            nickname: props.name,
            email: props.email,
            image: image.fileUri,
            comments: [{
                nickname: props.name,
                comment: comment,
            }]
        })

        setImage({})
        setComment('')
        props.navigation.navigate('Feed')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma imagem</Text>
                <View style={styles.imageContainer}>
                    <Image 
                        source={image.fileUri} 
                        style={styles.image} />
                </View>
                <TouchableOpacity onPress={libraryLaunch} style={styles.buttom}>
                    <Text style={styles.buttomText}>Escolha a foto</Text>
                </TouchableOpacity>
                <TextInput 
                    placeholder='Deixe algum comentário para sua imagem...' 
                    style={styles.input}
                    value={comment}
                    editable={props.name != null}
                    onChangeText={text => setComment(text)} />
                <TouchableOpacity onPress={save} style={styles.buttom}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        margin: Platform.OS === 'ios' ? 60 : 10,
        fontWeight: 'bold',
    }, 
    imageContainer: {
        width: '80%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    }, 
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'contain'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 10
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        marginTop: 20,
        width: '90%',
        textAlign: 'center'
    }
})