import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import TheardsButton from "./TheardsButton";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const BackgroundForTheardsButtons = (props) => {
  const [actualOption, setActualOption] = useState(1);

  const onPress = (id) => {
    setActualOption(id);
    props.actualOptionHandler(id);
  };

  return (
    <View style={styles.container}>
      <TheardsButton
        id={1}
        actualOption={actualOption}
        title="THEARDS INSIDE"
        onPress={onPress}
      />
      <TheardsButton
        id={2}
        actualOption={actualOption}
        title="THEARDS OUTSIDE"
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: screenWidth * 0.96,
    borderRadius: 10,
    height: screenHeight * 0.08,
    backgroundColor: "#1D2D55",
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default BackgroundForTheardsButtons;
