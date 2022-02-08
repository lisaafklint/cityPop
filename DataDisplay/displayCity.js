import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View,  ActivityIndicator, FlatList} from 'react-native';

const Cities = ({route, navigation}) => {
    const{name} = route.params;
    const[isLoading, setLoading] = useState(true)
    const[data, setData] = useState(0)

    const getPopulation = async () => {
        try {
         const response = await fetch('http://api.geonames.org/searchJSON?maxRows=1&username=weknowit&q=' + name);
         const json = await response.json();
         try {
             setData(json.geonames[0].population);
         } catch {
            alert("Could not find a city with this name, please try again")
         }
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
                {isLoading ? <ActivityIndicator color="#0D47A1" size="large" animating={true}/>  : (
                    <Text style= {styles.text}>
                        Population: 
                        {"\n"}
                        {data}
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
      color: '#0D47A1',
      fontWeight: 'bold',
      fontSize: 35
    },
    text: {
        textAlign: 'center',
        color: '#0D47A1',
        fontWeight: 'bold',
        fontSize: 25
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
      popContainer: {
        flex:7,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
      }
});