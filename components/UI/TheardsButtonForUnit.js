import React, { useEffect, useState } from "react";
import { Pressable, View, StyleSheet, Text, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { unitActions } from "../../storage/actualUnit-context";

const theardInside = require("../../assets/T1.png");
const theardOutside = require("../../assets/T2.png");

const TheardsButtonForUnit = (props) => {
  const actualOptionUnit = useSelector((state) => state.unitContext.actualUnit);
  const [actualUnit, setActualUnit] = useState(actualOptionUnit);
  const dispatch = useDispatch();
  const onPressButtonHandler = () => {
    if (props.id === 1) {
      dispatch(unitActions.setActualUnit());
    }
    if (props.id === 2) {
      dispatch(unitActions.setActualUnit2());
    }
    setActualUnit(props.id);
  };

  return (
    <Pressable
      style={[
        styles.button,
        props.id === actualOptionUnit ? styles.buttonActive : null,
      ]}
      onPress={onPressButtonHandler}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: "47%",
    height: "84%",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonActive: {
    backgroundColor: "#1B84E6",
  },
});

export default TheardsButtonForUnit;
