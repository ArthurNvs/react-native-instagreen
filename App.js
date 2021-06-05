import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import Header from './src/components/Header'
import Post  from './src/components/Post'

export default props => {
  const comments= [
    { nickname: '@megusta', comment: 'Muito divertidas as cores!'},
    { nickname: '@teodorosantos', comment: 'Muito divertidas as cores!'},
  ]

	return (
		<View style={{backgroundColor: '#55A48A'}}>
			<Header />
			<Post image={require('./assets/imgs/abss.jpg')} comments={comments} />
		</View>
		
	)
}