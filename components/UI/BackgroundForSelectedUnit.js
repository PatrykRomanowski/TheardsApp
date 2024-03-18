import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import TheardsButton from "./TheardsButton";
import TheardsButtonForUnit from "./TheardsButtonForUnit";

import { unitActions } from "../../storage/actualUnit-context";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const BackgroundForSelectedUnit = () => {
  const actualOptionUnit = useSelector((state) => state.unitContext.actualUnit);

  return (
    <View style={styles.container}>
      <TheardsButtonForUnit id={1} title="MM" buttonType="unit" />
      <TheardsButtonForUnit id={2} title="INCH" buttonType="unit" />
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

export default BackgroundForSelectedUnit;
