import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Signup from './screens/signup'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import LoadingScreen from './screens/LoadingScreen';
import Login from './screens/login';
import Dashboard from './screens/dashboard';
import Home from './screens/home'
import firebase  from 'firebase';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <AppNavigator/>
  );
}

const AppSwitchNavigator = createSwitchNavigator({
  Home : Home,
  Login: Login,
  Dashboard : Dashboard,
})

const AppNavigator = createAppContainer(AppSwitchNavigator);