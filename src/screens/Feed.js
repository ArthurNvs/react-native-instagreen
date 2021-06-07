import React, { useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

export default props => {
    const mock =
        [{
            id: Math.random(),
            nickname: '@gesonel',
            email: 'mestredosdisfarces@gesonel.ccom',
            image: require('../../assets/imgs/flower2.jpg'),
            comments: [{
                nickname: '@feijao',
                comment: 'belezura sô!',
            }, {
                nickname: '@coolfella',
                comment: 'Apreciando...'
            }]
        }, {
            id: Math.random(),
            nickname: '@watermelonsugar',
            email: 'wms@gmail.com',
            image: require('../../assets/imgs/mojave.jpg'),
            comments: []
        }]

    const [posts, setPosts] = useState(mock)

    const Render = () => {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => 
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }

    return <Render />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#011800'
    }
})