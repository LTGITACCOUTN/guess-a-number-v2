import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

export default function GameScreen({ userNumber }) {
  const initialGuess = generateRandomNumber(minBoundry, maxBoundry, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction){
      if ((direction === 'lower' && currentGuess<userNumber) || (direction === 'greater' && currentGuess > userNumber)){
        Alert.alert("Error","This is not True",{text: 'Ok, i know', style: 'cancel'})
        return;
      }

      if (direction === 'lower'){
        maxBoundry = currentGuess
        const newRndNumber = generateRandomNumber(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(newRndNumber);
      }

      if (direction === 'greater'){ 
        minBoundry = currentGuess + 1
        const newRndNumber = generateRandomNumber(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(newRndNumber);
      }
  }

  return (
    <View style={styles.screen}>
      <Title>OPINENTS's GUESS</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
  },
});
