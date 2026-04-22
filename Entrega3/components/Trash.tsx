import * as React from "react";
import { StyleSheet, View } from "react-native";
import Icon1 from "../assets/Icon.svg";
import { Width, Height, Color } from "../GlobalStyles";

export type TrashType = {
  /** Variant props */
  size?: 48;
};

const Trash = ({ size = 48 }: TrashType) => {
  return (
    <View style={styles.trash2}>
      <Icon1 style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  trash2: {
    width: Width.width_25,
    height: Height.height_25,
    zIndex: 1,
    overflow: "hidden",
  },
  icon: {
    position: "absolute",
    height: "83.2%",
    width: "75.2%",
    top: "8.4%",
    right: "12.4%",
    bottom: "8.4%",
    left: "12.4%",
    maxWidth: "100%",
    maxHeight: "100%",
    color: Color.colorDeepskyblue,
    overflow: "hidden",
  },
});

export default Trash;
