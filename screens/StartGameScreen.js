import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler(){
    console.log("Primary Button Pressed");
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.headerText}>Enter The Number</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.currentButton}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.currentButton}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#5451D6",
    borderRadius: 28,
    padding: 16,
  },
  numberInput: {
    width: 50,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
    color: "#d6c051",
    fontSize: 32,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  currentButton:{
    flex: 1
  },
  headerText:{
    color:'#ffffff',
    fontWeight: 'bold',
    fontSize: 28
  }
});
