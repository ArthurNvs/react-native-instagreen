import React from 'react'
import { 
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
} from 'react-native'

import Author from './Author'
import Comments from './Comments'

export default props => {
    return (
            <View style={styles.container}>
                <Image source={props.image} style={styles.image} />
                <Author email='email@email.com' nickname='@fulano' />
                <Comments comments={props.comments} />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height:  Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain',
    }
})