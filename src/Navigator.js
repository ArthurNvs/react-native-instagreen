import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont()

const Tab = createBottomTabNavigator()

const MyTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#156F0F',
                    inactiveTintColor: 'white',
                    style: {
                        backgroundColor: 'white',
                        borderTopWidth: 0.167,
                        borderTopColor: '#156F0F'
                      }
                  }}
                screenOptions={({route})=>({
                    tabBarIcon:({ focused, tintColor })=>{
                        let iconName

                        if (route.name === 'Feed') {
                            iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline'

                        } else if(route.name === 'Foto') {
                            iconName = focused ? 'camera' : 'camera-outline'

                        } else if(route.name === 'Perfil'){
                            iconName = focused ? 'md-person' : 'md-person-outline'
                        } 
                        return <Ionicons name={iconName} size={30} color='#156F0F' style={{marginTop: 5}} /> //<FontAwesome icon={iconName} tintColor={tintColor} />
                    }})}>
                <Tab.Screen name='Feed' component={Feed} />
                <Tab.Screen name='Foto' component={AddPhoto} />
                <Tab.Screen name='Perfil' component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
      )
}

export default MyTabs