import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ModalDescription = (props) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    width: "100vw",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  text: {
    fontFamily: "Inter_700Bold",
    color: "white",
    fontSize: 20,
  },
});

export default ModalDescription;
