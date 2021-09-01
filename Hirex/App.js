import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './screens/home'

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Home/>
      </View>
    </SafeAreaView>
  );
}

