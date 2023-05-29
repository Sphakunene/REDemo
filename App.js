import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  function goalInputHandler(enteredText){
    console.log(enteredText);
  };

  function addGoaHandler(){
    console.log("fuck you");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />

        <Button title='Add Goal' onPress={addGoaHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <Text>list of goals..</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 12,
    paddingHorizontal: 16,
    flex:1,


  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    alignItems: 'center',
   marginBottom: 24,
    borderBottomColor: 'cccccc',
    flex: 1,



  },
  textInput: {
    borderWidth: 2,
    borderColor: 'cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,


  }
});
