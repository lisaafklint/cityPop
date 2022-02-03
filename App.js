import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableHighlight, Button, Pressable} from 'react-native';
import Home from './Home/homeScreen.js'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='CityPop' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
