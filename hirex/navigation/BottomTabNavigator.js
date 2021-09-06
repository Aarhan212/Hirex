import React from 'react'
import { createAppContainer } from 'react-navigation'
import Search from '../screens/search'
import Splash from '../screens/splash'
import Dashboard from '../screens/dashboard'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const TabNavigator = createBottomTabNavigator();

function MyTabs() {
    return(
        <TabNavigator>
            <Tab.Screen name="Dashboard" component={Dashboard}/>
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="Splash" component={Splash}/>
        </TabNavigator>
    )
}

export default function Tab() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
