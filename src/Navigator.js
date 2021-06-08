import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont()

const Tab = createBottomTabNavigator()

const MyTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                tabBarOptions={{
                    activeTintColor: 'green',
                    inactiveTintColor: 'gray'
                  }}
                screenOptions={({route})=>({
                    tabBarIcon:({ focused, tintColor })=>{
                        let iconName

                        if (route.name === 'Home') {
                            iconName = focused ? 'md-home' : 'md-home-outline'

                        } else if(route.name === 'Camera') {
                            iconName = focused ? 'camera' : 'camera-outline'

                        } else if(route.name === 'User'){
                            iconName = focused ? 'md-person' : 'md-person-outline'
                        } 
                        return <Ionicons name={iconName} size={30} color='green' /> //<FontAwesome icon={iconName} tintColor={tintColor} />
                    }})}>
                <Tab.Screen name='Home' component={Feed} />
                <Tab.Screen name='Camera' component={AddPhoto} />
                <Tab.Screen name='User' component={Feed} />
            </Tab.Navigator>
        </NavigationContainer>
      )
}

export default MyTabs