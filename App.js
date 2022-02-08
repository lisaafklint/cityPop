import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableHighlight, Button, Pressable} from 'react-native';
// import { Icon } from 'react-native-elements';
import Home from './Home/homeScreen.js'
import City from './Search/searchByCity.js'
import Country from './Search/searchByCountry.js'
import Countries from './DataDisplay/displayCountry.js'
import Cities from './DataDisplay/displayCity.js'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='City' component={City} />
        <Stack.Screen name='Country' component={Country} />
        <Stack.Screen name = 'Countries' component={Countries} />
        <Stack.Screen name = 'Cities' component={Cities} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
