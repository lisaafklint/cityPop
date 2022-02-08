import React from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

/*
  Home screen of the application. 
  Allows the user to decide to search by country or city
  Depending on choice the user is navigated to that screen
*/
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
          //catch if the uses touches the Pressable
            onPress={() => {
                navigation.navigate('City')
            }} 
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#E3F2FD'
                  : '#BBDEFB'
              },
              styles.wrapperCustom
            ]}
            >
            <Text style={styles.buttonText}> SEARCH BY CITY </Text>
          </Pressable>
          <View style={styles.space} />
          <Pressable 
            onPress={() => {
                navigation.navigate('Country')
            }} 
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#E3F2FD'
                  : '#BBDEFB'
              },
              styles.wrapperCustom
            ]}>
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
      color: '#0D47A1',
      fontWeight: 'bold',
      fontSize: 35
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#E3F2FD',
      alignItems: 'center',
    },
    textContainer: {
      flex: 3,
       justifyContent: 'center'
    },
    buttonContainer: {
      flex:7,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center'
    },
    buttonText: {
      fontSize: 30,
      fontWeight: "bold",
      color: '#0D47A1',

    },
    space: {
      height: 30
    },
    wrapperCustom: {     
      borderRadius: 8,
      padding: 10,
      margin: 10
    },
  });