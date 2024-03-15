import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { modalActions } from "../../storage/modal-context";
import { useDispatch } from "react-redux";

const SettingIcon = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Ionicons
        onPress={() => {
          console.log("click!!!");
          dispatch(modalActions.showModal());
        }}
        name="settings-outline"
        size={24}
        color="white"
      />
    </>
  );
};

export default SettingIcon;
