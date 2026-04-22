import * as React from "react";
import { StyleSheet, View } from "react-native";
import Icon1 from "../assets/Icon.svg";
import { Width, Height, Color } from "../GlobalStyles";

export type CheckType = {
  /** Variant props */
  size?: 48;
};

const Check = ({ size = 48 }: CheckType) => {
  return (
    <View style={[styles.check, styles.iconPosition]}>
      <Icon1 style={[styles.icon, styles.iconPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  check: {
    top: 38,
    left: 170,
    width: 15,
    height: 15,
    zIndex: 2,
  },
  icon: {
    height: "46%",
    width: "66.67%",
    top: "25.33%",
    right: "16.67%",
    bottom: "28.67%",
    left: "16.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    color: "#00C2FF",
  },
});

export default Check;
