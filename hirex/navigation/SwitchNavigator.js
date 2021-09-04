import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Login from '../screens/login'
import Signup from '../screens/signup'
import Dashboard from '../screens/dashboard'
import MoreInfo from '../screens/moreInfo'


const SwitchNavigator = createSwitchNavigator(
    {
        Home: {
            screen:Home
        },
        Login:{
            screen:Login
        },
        Signup:{
            screen:Signup
        },
        MoreInfo:{
            screen:MoreInfo
        },
        Dashboard:{
            screen:Dashboard
        }
    },
    {
        initialRouteName:'Home'
    }
)

export default createAppContainer(SwitchNavigator)