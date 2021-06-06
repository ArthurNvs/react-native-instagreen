import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native'
import Header from './src/components/Header'
import Post  from './src/components/Post'

export default props => {
  const comments= [
    { nickname: '@megusta', comment: 'Muito divertidas as cores!'},
    { nickname: '@teodorosantos', comment: 'Gostei de ver!'},
  ]

	return (
		<View style={{backgroundColor: '#FFF', height: '100%'}}>
			<Header />
			<Post image={require('./assets/imgs/abss.jpg')} comments={comments} />
		</View>
		
	)
}