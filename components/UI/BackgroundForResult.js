import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

import HoleDiameterText from "./HoleDiameterText";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const BackgroundForResult = (props) => {
  return (
    <View style={styles.resultContainer}>
      <HoleDiameterText
        data={props.data}
        index={props.index}
        description="DRILL SIZE"
        type="drillHole"
        unit={props.unit}
      />
      <HoleDiameterText
        index={props.index}
        data={props.data}
        description="HOLE AFTER THEARDING"
        type="holeAfterThreading"
        unit={props.unit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    width: screenWidth * 0.96,
    height: screenHeight * 0.3,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#1B84E6",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default BackgroundForResult;
