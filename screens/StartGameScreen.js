import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Error", "Invalid Number", [
        { text: "Okey", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(choosenNumber);
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
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
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
    backgroundColor: Colors.primaryBackground,
    borderRadius: 28,
    padding: 16,
  },
  numberInput: {
    width: 50,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.primaryText,
    color: Colors.inputTextColor,
    fontSize: 32,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  currentButton: {
    flex: 1,
  },
  headerText: {
    color: Colors.primaryText,
    fontWeight: "bold",
    fontSize: 28,
  },
});
