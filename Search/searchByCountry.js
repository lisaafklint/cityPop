import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign} from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity, Button, Pressable, TextInput} from 'react-native';

const Country = ({navigation}) => {
    const[textInput, setTextInput] = useState("")
    return (
        <View style={styles.container} >
            <Text style={styles.title} >
                SEARCH BY COUNTRY </Text>
            <TextInput 
                style={{height:40}}
                placeholder = "Enter a country" 
                onChangeText = {(text) => setTextInput(text)}
                onSubmitEditing = { () => {
                    if(validateInput(textInput)){
                        alert(`Search country: ${textInput}`);
                    } else {
                        alert("Invalid input. Please only enter letters");
                    }
                    setTextInput("");
                }}
                value = {textInput} 
                />
            <TouchableOpacity onPress={() => {
                <Text style={styles.title} >  
                    pressed </Text>
            }}>
                <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
        </View>

    );
  }
export default Country

function validateInput(country) {
    var isValidName = true;
    if(/[!@#$%^&*(),.?":{}|<>]/g.test(country) || !/^[A-Z]/.test(country) || /\d+/g.test(country)) {
      isValidName = false;
    }
    return isValidName;
  }

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
    title: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
      }
});
