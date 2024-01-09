import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from "react-native";
import { Button } from "react-native-web";

export default function Form({ addHandler }) {
  const [text, setText] = useState("");

  const onChange = (inputText) => {
    setText(inputText);
  };

  const handleAdd = () => {
    if (text.trim() !== "") {
      addHandler(text);
      setText("");
    } 
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Впишите задачу..."
        value={text}
      />
      

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAdd}
      >
        <Text style={styles.addButtonText}><b>ДОБАВИТЬ ЗАДАЧУ</b></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    color: "ccccc",
    padding: 40,
    textAlign: "center",
    
  },
  addButton: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#1E5945",
  },
  addButtonText: {
    color: "#ffffffff",
    fontSize: 12,
    padding: 10,
    textAlign: "center",
  },
});

