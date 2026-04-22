import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Trash2 from "./Trash2";
import {
  Padding,
  Color,
  Border,
  Height,
  Width,
  Gap,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const FrameComponent1111111 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <View style={styles.frameParent}>
        <View style={styles.rectangleWrapper}>
          <Image style={styles.frameItem} contentFit="cover" />
        </View>
        <View style={styles.crditoVisaParent}>
          <Text style={[styles.crditoVisa, styles.textTypo]}>Crédito Visa</Text>
          <Text style={[styles.text, styles.textTypo]}>
            8457 **** **** 5487
          </Text>
        </View>
      </View>
      <View style={styles.trash4Wrapper}>
        <Trash2 size={48} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontStyle: "italic",
    zIndex: 1,
  },
  rectangleParent: {
    alignItems: "flex-end",
    paddingHorizontal: Padding.padding_10_5,
    paddingTop: Padding.padding_4_5,
    paddingBottom: Padding.padding_8_5,
    gap: 103,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue200,
    borderStyle: "solid",
    backgroundColor: Color.colorGray100,
    borderRadius: Border.br_10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: Height.height_71,
    width: Width.width_391,
  },
  frameChild: {
    display: "none",
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue200,
    borderStyle: "solid",
    backgroundColor: Color.colorGray100,
    borderRadius: Border.br_10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: Height.height_71,
    width: Width.width_391,
  },
  frameParent: {
    width: 226,
    zIndex: 0,
    gap: Gap.gap_26,
    height: 57,
    flexDirection: "row",
  },
  rectangleWrapper: {
    paddingTop: Padding.padding_7,
    width: Width.width_50,
    zIndex: 1,
    height: 57,
  },
  frameItem: {
    height: Height.height_50,
    zIndex: 1,
    width: Width.width_50,
  },
  crditoVisaParent: {
    height: Height.height_49,
    width: Width.width_150,
    gap: Gap.gap_10,
    zIndex: 1,
  },
  crditoVisa: {
    width: 106,
    height: Height.height_21,
    fontSize: FontSize.fs_17,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDeepskyblue,
  },
  text: {
    width: Width.width_153,
    height: Height.height_18,
    fontSize: FontSize.fs_15,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray400,
  },
  trash4Wrapper: {
    width: Width.width_25,
    height: Height.height_36,
    justifyContent: "flex-end",
    paddingBottom: Padding.padding_11,
    zIndex: 1,
  },
});

export default FrameComponent1111111;
