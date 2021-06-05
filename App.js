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
	return (
		<View>
			<Header />
			<Post image={require('./assets/imgs/abss.jpg')} />
		</View>
		
	)
}