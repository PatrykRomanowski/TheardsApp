import React from "react";
import { StyleSheet, View } from "react-native";

const Triangle = () => {
  return <View style={styles.triangle}></View>;
};

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 12,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white", // Kolor trójkąta
  },
});

export default Triangle;
