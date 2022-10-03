import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#442FB2", "#573ce6"]} style={styles.container}>
        {/* <ImageBackground source={require('./assets/images/background.png')} resizeMode="stretch"> */}
          <StartGameScreen />
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
