import React from "react";
import { StyleSheet, View, Text } from "react-native";

const HoleDiameterText = (props) => {
  console.log(props.data);
  console.log(props.index);
  console.log(props.unit);
  if (props.data.length === 0) {
    return;
  }
  if (props.type === "drillHole") {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.result}>{props.data[props.index - 1].hole} </Text>
        <Text style={styles.description}>[{props.unit}]</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.result}>
          {props.data[props.index - 1].min} - {props.data[props.index - 1].max}
        </Text>
        <Text style={styles.description}>[{props.unit}]</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  textContainer: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    marginTop: 6,
  },

  description: {
    fontFamily: "Inter_600SemiBold",
    color: "white",
  },
  result: {
    marginTop: 10,
    fontSize: 40,
    fontFamily: "Inter_800ExtraBold",
    color: "white",
  },
});

export default HoleDiameterText;
