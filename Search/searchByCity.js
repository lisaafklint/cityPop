import React, { useState } from 'react';
import { AntDesign} from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

/*
    The user can enter a city of choice
    Users will get an alert if input is symbols or numbers
    The input city is then sent as a parameter to the displayCity screen 
*/
const City = ({navigation}) => {
    const[textInput, setTextInput] = useState("")
    return (
        <View style={styles.container} >
            <View style={styles.textContainer}>
                <Text style={styles.title} >
                    SEARCH BY CITY </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textBox}
                    //Updates the textInput every time the uses presses a key
                    placeholder = " Enter a city...  " 
                    onChangeText = {(text) => setTextInput(text)}
                   // value= {textInput}
                    onSubmitEditing = { () => {
                        //controlles if it is a valid input
                        if(validateInput(textInput)){
                            setTextInput(textInput)
                        } else {
                            alert("Invalid input. Please only enter letters");
                            setTextInput("");
                        }
                    }}
                    />
                <View style={styles.space} />
                <TouchableOpacity onPress={() => {
                    if(textInput.length==0 || !validateInput(textInput)) {
                        alert("Invalid input. Please enter the name of a city")
                    } else {
                        navigation.navigate('Cities', {
                            name: textInput
                        })
                    }
                }}>
                    <View style={styles.roundshape}>
                        <AntDesign name="search1" size={40} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
  }
export default City

//Function to evaluate a string to see if it can be a city (has numbers/symbols/is empty)
function validateInput(city) {
    var isValidName = true;
    if(/[!@#$%^&*(),.?":{}|<>]/g.test(city) || !/^[A-Ö]/.test(city) || /\d+/g.test(city)) {
      isValidName = false;
    }
    return isValidName;
  }

const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      color: '#0D47A1',
      fontWeight: 'bold',
      fontSize: 35
    },
    textContainer: {
        flex: 3,
         justifyContent: 'center'
      },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#E3F2FD',
      alignItems: 'center',
    },
    space: {
        height: 30
      },
    inputContainer: {
        flex:7,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
      },
    textBox: {
        height:45, 
        fontSize:20, 
        backgroundColor:'#BBDEFB', 
        borderRadius:8, 
    },
    roundshape:  {
        height: 70, //any of height
        width: 70, //any of width
        justifyContent:"center",
        alignItems: 'center',
        borderRadius: 35,   // it will be height/2
        borderWidth: StyleSheet.hairlineWidth, 
      }
});
