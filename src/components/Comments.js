import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Alert
} from 'react-native'

export default props =>  {
    
    const comments = () => {
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

    return (
        <>
        {comments()}
        </>
    )
}

const styles = StyleSheet.create({

    commentContainer : {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444',
        height: 20
    },
    comment: {
        color: '#555',
        height: 20
    }
})