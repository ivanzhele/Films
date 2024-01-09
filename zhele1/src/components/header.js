import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}><b>Список дел</b></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#1E5945",
    paddingTop: 30
  },
  text: {
    color: "#ffffffff",
    fontSize: 20,
    padding: 20,
    textAlign: "center",
  },
});
