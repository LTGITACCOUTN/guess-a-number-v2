import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";

function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen() {
  const initialGuess = generateRandomNumber(1, 100, );
  const [currentGuess, serCurrentGuess] = useState();

  return (
    <View style={styles.screen}>
      <Title>OPINENTS's GUESS</Title>
      <View>
        <Text>Higher or Lower?</Text>
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
