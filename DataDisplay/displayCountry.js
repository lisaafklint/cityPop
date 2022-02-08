import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';

/*
    Displays cities in order of  highest population from the country entered by the user
    If no data can be found an alert will be displayed
    As the data is fetched a loading animation is displayed
*/

const Countries = ({route, navigation}) => {
    const{name} = route.params;
    const[isLoading, setLoading] = useState(true);
    const[data, setData] = useState([]);

    //First finds the country-code for the country and uses it to fins the cities for the country
    const getCities = async () => {
        try {
            const response = await fetch('http://api.geonames.org/searchJSON?maxRows=1&cities=cities1000&username=weknowit&q=' + name);
            const json = await response.json();
            try {
                const responseCity = await fetch('http://api.geonames.org/searchJSON?maxRows=50&cities=cities1000&username=weknowit&orderby=population&country=' + json.geonames[0].countryCode);
                const jsonCity = await responseCity.json();
                setData(jsonCity.geonames);
            } catch (error) {
                alert("Could not find a country with this name, please try again")
            }
          } catch (error) {
            alert("Could not find a country with this name, please try again")
            console.error(error);
          } finally {
            setLoading(false);
          }
    }

    useEffect(() => {
        getCities();
      }, []);

    return (
        <View style={styles.container}>
                {isLoading ? <ActivityIndicator color="#0D47A1" size="large" animating={true}/> : (
                <FlatList
                    ListHeaderComponent={()=><Text style={styles.title}>
                        {name}
                    </Text>}
                    data={data}
                    keyExtractor={(item, index) => 'item'+index} //Add this line
                    renderItem={({ item }) => 
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Cities', {
                            name: item.toponymName
                        })
                    }}>
                    <Text style={styles.items}>{item.toponymName}</Text>
                    </TouchableOpacity>
                }/>
                )}
        </View>
    );
  }
export default Countries


const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      color: '#0D47A1',
      fontWeight: 'bold',
      fontSize: 35,
      padding: 10,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#E3F2FD',
    },
    items: {
        padding: 10,
        fontSize: 25,
        height: 60,
      },
      textContainer: {
        flex: 3,
         justifyContent: 'center'
      }
});