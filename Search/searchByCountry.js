import React, { useState } from 'react';
import { AntDesign} from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

const Country = ({navigation}) => {
    const[textInput, setTextInput] = useState("")
    return (
        <View style={styles.container} >
          <View style={styles.textContainer}>
            <Text style={styles.title} >
                SEARCH BY COUNTRY </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textBox}
                placeholder = " Enter a country...  " 
                onChangeText = {(text) => setTextInput(text)}
                onSubmitEditing = { () => {
                  if(validateInput(textInput)){
                      setTextInput(textInput)
                  } else {
                      alert("Invalid input. Please enter the name of a country");
                      setTextInput("");
                  }
                }}
                />
            <View style={styles.space} />
            <TouchableOpacity onPress={() => {
              if(textInput.length==0 || !validateInput(textInput)){
                alert("Invalid input. Please enter the name of a country")
              } else {
                navigation.navigate('Countries', {
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
      color: '#0D47A1',
      fontWeight: 'bold',
      fontSize: 35
    },
    textContainer: {
      flex: 3,
       justifyContent: 'center'
    },
    space: {
      height: 30
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#E3F2FD',
      alignItems: 'center',
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
