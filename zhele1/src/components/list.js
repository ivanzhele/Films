import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity style={styles.task} onPress={() => deleteHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  task: {
    
  },
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    borderColor: "#1E5945",
    backgroundColor: "#fafafa",
    borderWidth: 2,
    marginTop: 20,
    width: "60%",
    marginLeft: "20%",

  }
});
