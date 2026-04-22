import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import {
  Color,
  Border,

  Height,
  Width,
  FontFamily,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

const FrameComponent11 = () => {
  return (
    <View style={styles.inicialInner}>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <View style={styles.ellipseWrapper}>
          <Image style={styles.frameItem} contentFit="cover" />
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.argaDinamicWrapper, styles.argaLayout]}>
            <Text style={[styles.argaDinamic, styles.r12500Typo]}>
              Arga Dinamic
            </Text>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.frameGroup}>
              <View style={styles.starRatingSetWrapper}>
                <Image style={styles.starRatingSet} contentFit="cover" />
              </View>
              <View style={styles.starWrapper}>
                <Image style={styles.starRatingSet} contentFit="cover" />
              </View>
              <Image style={styles.starRatingSet} contentFit="cover" />
              <Image style={styles.starRatingSet} contentFit="cover" />
            </View>
          </View>
          <Text style={[styles.r12500, styles.r12500Typo]}>
            <UnorderedList style={styles.r125002}>
              <ListItem>R$ 125,00</ListItem>
            </UnorderedList>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
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
    height: Height.height_70,
    width: Width.width_390,
  },
  argaLayout: {
    height: Height.height_20,
    width: Width.width_117,
  },
  r12500Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: FontSize.fs_17,
    zIndex: 1,
  },
  inicialInner: {
    zIndex: 0,
    height: 73,
    paddingBottom: Padding.padding_3,
    flexDirection: "row",
    width: Width.width_390,
  },
  rectangleParent: {
    alignItems: "flex-end",
    paddingHorizontal: Padding.padding_9,
    paddingTop: Padding.padding_3,
    paddingBottom: Padding.padding_7,
    gap: Gap.gap_15,
    flexDirection: "row",
  },
  frameChild: {
    display: "none",
  },
  ellipseWrapper: {
    height: 53,
    justifyContent: "flex-end",
    paddingBottom: Padding.padding_4,
    width: Width.width_53,
    zIndex: 1,
  },
  frameItem: {
    height: Height.height_49,
    zIndex: 1,
    width: Width.width_53,
  },
  frameParent: {
    height: Height.height_60,
    gap: Gap.gap_2,
    width: Width.width_117,
    zIndex: 1,
  },
  argaDinamicWrapper: {
    paddingLeft: Padding.padding_3,
    flexDirection: "row",
  },
  argaDinamic: {
    color: Color.colorWhite,
    height: Height.height_20,
    width: Width.width_117,
  },
  frameWrapper: {
    width: 79,
    paddingLeft: Padding.padding_2,
    height: Height.height_15,
    flexDirection: "row",
  },
  frameGroup: {
    width: 77,
    gap: Gap.gap_3,
    height: Height.height_15,
    zIndex: 1,
    flexDirection: "row",
  },
  starRatingSetWrapper: {
    width: Width.width_20,
    paddingRight: Padding.padding_5,
    height: Height.height_15,
  },
  starRatingSet: {
    width: Width.width_15,
    height: Height.height_15,
    zIndex: 1,
  },
  starWrapper: {
    width: Width.width_18,
    paddingRight: Padding.padding_3,
    height: Height.height_15,
  },
  r12500: {
    width: 113,
    height: Height.height_21,
    color: Color.colorLimegreen,
  },
  r125002: {
    margin:0,
    paddingLeft: Padding.padding_23,
  },
});

export default FrameComponent11;
