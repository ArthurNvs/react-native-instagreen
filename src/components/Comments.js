import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default props =>  {
    
    const Comments = () => {
        let view = null
        if(props.comments) {
            view = props.comments.map((item, index) => {
                return (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.nickname}> {item.nickname} </Text>
                        <Text style={styles.comment}> {item.comment} </Text>
                    </View>
                )
            })
        }

        return view
    }

    return <Comments />
}

const styles = StyleSheet.create({

    commentContainer : {
        flexDirection: 'row',
        margin: 3
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: 'green',
    },
    comment: {
        color: '#555',
    }
})