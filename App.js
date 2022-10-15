import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useState } from "react";


export default function App() {
  const [pickedNumber,setPickedNumber] = useState();

  function pickedNumberHandler(pickedNumber){
    setPickedNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  if (pickedNumber){
    screen = <GameScreen />
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#442FB2", "#573ce6"]} style={styles.container}>
        {/* <ImageBackground source={require('./assets/images/background.png')} resizeMode="stretch"> */}
        <SafeAreaView style={styles.container}>
        {screen}
        </SafeAreaView>
        {/* </ImageBackground> */}
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#442FB2",
  },
});
