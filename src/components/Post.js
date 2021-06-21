import React from 'react'
import { connect } from 'react-redux'
import { 
    StyleSheet,
    View,
    Image,
    Dimensions,
} from 'react-native'

import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

const Post = props => {
    const addComment = props.name ? <AddComment postId={props.id} /> : null
    return (
            <View style={styles.container}>
                <Image source={props.image} style={styles.image} />
                <Author email={props.mail} nickname={props.nickname} />
                <Comments comments={props.comments} />
                {addComment}
            </View>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

export default connect(mapStateToProps)(Post)

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