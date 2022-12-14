import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { AppStack } from './src/stacks/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
      <StatusBar translucent={false} backgroundColor='transparent' />
    </NavigationContainer>
  );
}

