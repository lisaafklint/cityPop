import React, {useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign} from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity, Button, Pressable, TextInput, ActivityIndicator, FlatList} from 'react-native';

const Cities = ({route, navigation}) => {
    const{name} = route.params;
    const[isLoading, setLoading] = useState(true)
    const[data, setData] = useState(0)

    const getPopulation = async () => {
        try {
         const response = await fetch('http://api.geonames.org/searchJSON?maxRows=1&username=weknowit&q=' + name);
         const json = await response.json();
         setData(json.geonames[0].population);
       } catch (error) {
         alert("Could not find a city with this name, please try again")
         console.error(error);
       } finally {
         setLoading(false);
       }
     }
 
     useEffect(() => {
         getPopulation();
       }, []);
    
    return (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title} >
                {name}
                 </Text>
            </View>
            <View style={styles.popContainer}>
                {isLoading ? <ActivityIndicator/> : (
                    <Text >
                        Population {data}
                    </Text>

                )}
            </View>
        </View>
    );
  }
export default Cities

const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 35
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'white',
      alignItems: 'center',
    },
    items: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
      textContainer: {
        flex: 3,
         justifyContent: 'center'
      },
    title: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
      },
      popContainer: {
        flex:7,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
      }
});