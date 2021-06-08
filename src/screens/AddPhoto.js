import React, { useState } from 'react'
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


export default props => {
    const[image, setImage] = useState(null)
    const[comment, setComment] = useState('')

    const libraryLaunch = () => {
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
            //console.warn('response', JSON.stringify(res))
            setImage({
                filePath: res.assets,
                fileData: res,
                fileUri: res.assets
            })
          }
        })
    }

    const pickImage = () => {
        launchImageLibrary({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                setImage({ image: { uri: res.uri, base64: res.data } })
            }
        })
    }

    const save = async () => {
        Alert.alert('Imagem adicionada!', comment)
    }

    const Render = () => {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={image.fileUri} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={libraryLaunch} style={styles.buttom}>
                        <Text style={styles.buttomText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TextInput 
                        placeholder='Deixe algum comentário para sua imagem...' 
                        style={styles.input}
                        value={comment}
                        onChangeText={text => setComment(text)} />
                    <TouchableOpacity onPress={save} style={styles.buttom}>
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    return <Render />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
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
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        marginTop: 20,
        width: '90%'
    }
})