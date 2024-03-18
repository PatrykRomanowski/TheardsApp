import React, { useState } from "react";
import { Pressable, View, StyleSheet, Text, Image } from "react-native";

const OkButtonModal = (props) => {
  return (
    <View
      style={[
        styles.button,
        props.id === props.actualOption ? styles.buttonActive : null,
      ]}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: "47%",
    height: 50,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },
  buttonActive: {
    backgroundColor: "#1B84E6",
  },
  imgContainer: {
    width: "30%",
    alignItems: "flex-start",
  },
  img: {
    width: "80%",
    height: "80%",
  },
});

export default OkButtonModal;
