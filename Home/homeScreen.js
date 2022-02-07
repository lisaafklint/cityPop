import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableHighlight, Button, Pressable} from 'react-native';


const Home = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text CityPop style={styles.title}>
            CityPop
          </Text>
        </View>
  
        <View style={styles.buttonContainer}>
          <Pressable 
            onPress={() => {
                navigation.navigate('City')
            }} >
            <Text style={styles.buttonText}> SEARCH BY CITY </Text>
          </Pressable>
  
          <Pressable 
            onPress={() => {
                navigation.navigate('Country')
            }} >
            <Text style={styles.buttonText}> SEARCH BY COUNTRY </Text>
          </Pressable>
  
        </View>
      </View>
    );
  }
export default Home
  
  const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'grey',
      alignItems: 'center',
    },
    textContainer: {
      flex: 3,
  /*     backgroundColor: "green",
   */    justifyContent: 'center'
    },
    buttonContainer: {
      flex:6,
  /*     backgroundColor: "red",
   */ flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center'
    },
    buttonText: {
      fontSize: 30,
      fontWeight: "bold",
      color: 'black'
    }
  });