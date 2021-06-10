import React, { useState } from 'react'
import  {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert,
    Button,
} from 'react-native'
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome'

export default props => {
    const [comment, setComment] = useState('')
    const [changeMode, setChangeMode] = useState(false)

    function handleAddComment() {
        Alert.alert('Adicionado', comment)
    }

    const CommentArea = () => {
        let commentArea = null

        if (changeMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput 
                        placeholder='Escreva seu comentário'
                        placeholderTextColor='#B7D6AD'
                        style={styles.input}
                        autoFocus={true}
                        value={comment}
                        onChangeText={text => setComment(text)}
                        onSubmitEditing={handleAddComment} />
                    <TWF onPress={() => setChangeMode(false)}>
                        <FontAwesome icon={RegularIcons.timesCircle} style={styles.icons} />
                    </TWF>
                </View>
            )
        } else {
            commentArea = (
                <TWF onPress={() => setChangeMode(true)}>
                    <View style={styles.container}>
                        <FontAwesome icon={RegularIcons.comment} style={styles.icons} />
                        <Text style={styles.caption}> 
                            Quer comentar algo a respeito?
                        </Text>
                    </View>
                </TWF>
            )
        }

        return <View>{commentArea}</View>
    }

    return <CommentArea />

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    caption: {
        marginLeft: 10,
        fontSize: 14,
        color: '#B7D6AD',
        
    },
    input: {
        width: '90%',
        marginLeft: 10,
        fontSize: 14,
    },
    icons:  {
        color: 'green',
        fontSize: 17,
        
    }
})