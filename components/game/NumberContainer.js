import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
    backgroundColor: Colors.primaryBackground,
    borderRadius: 28,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primaryText,
  },
});
