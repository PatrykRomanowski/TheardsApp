import React from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";

const Button = ({ pressed }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable>
        <Text>XD2</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "80%",
    height: 100,
    backgroundColor: "red",
  },
});

export default Button;
