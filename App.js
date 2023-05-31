import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enterGoalText, setEnterGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnterGoalText(enteredText);
  };

  function addGoaHandler() {
    setCourseGoals((current) => [...current, {text:enterGoalText,key:Math.random().toString()},]);
    console.log(courseGoals);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />

        <Button title='Add Goal' onPress={addGoaHandler} />
      </View>
      <View style={styles.goalsContainer} >
        <FlatList alwaysBounceVertical={false} data={courseGoals} renderItem={itemData => {

          return (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText} > {itemData.item.text}</Text>
            </View>
          );
        }}>


        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 12,
    paddingHorizontal: 16,
    flex: 1,


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
  },
  goalItem: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",

  },
  goalText: {
    color: "white",
  }
});
