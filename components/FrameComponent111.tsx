import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import {
  Width,
  FontFamily,
  Height,
  Padding,
  Gap,
  Color,
  FontSize,
  Border,
} from "../GlobalStyles";


const FrameComponent111 = () => {
  return (
    <View style={[styles.rectangleParent, styles.frameChildLayout]}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={styles.ellipseWrapper}>
        <Image style={styles.frameItem} contentFit="cover" />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.arbornetWrapper}>
          <Text style={[styles.arbornet, styles.r10300Typo]}>ArborNet</Text>
        </View>
        <View style={styles.frameWrapper}>
          <View style={styles.starParent}>
            <Image style={styles.frameInner} contentFit="cover" />
            <View style={styles.loneStarParent}>
              <Image
                style={[styles.loneStarIcon, styles.loneIconPosition]}
                contentFit="cover"
              />
              <Image
                style={[styles.loneStarIcon2, styles.loneIconPosition]}
                contentFit="cover"
              />
            </View>
          </View>
        </View>
        <Text style={[styles.r10300, styles.r10300Typo]}>
          <UnorderedList style={styles.r103002}>
            <ListItem>R$ 103,00</ListItem>
          </UnorderedList>
        </Text>
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
  r10300Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: FontSize.fs_17,
    height: Height.height_21,
    zIndex: 1,
  },
  loneIconPosition: {
    top: 0,
    position: "absolute",
    width: Width.width_15,
    height: Height.height_15,
    zIndex: 1,
  },
  rectangleParent: {
    paddingHorizontal: Padding.padding_9,
    paddingTop: Padding.padding_4,
    paddingBottom: Padding.padding_6,
    gap: Gap.gap_19,
    flexDirection: "row",
  },
  frameChild: {
    display: "none",
  },
  ellipseWrapper: {
    height: Height.height_54,
    paddingTop: Padding.padding_5,
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
    width: Width.width_111,
    gap: Gap.gap_1_5,
    zIndex: 1,
  },
  arbornetWrapper: {
    paddingLeft: Padding.padding_3,
    height: Height.height_21,
    width: Width.width_81,
    flexDirection: "row",
  },
  arbornet: {
    color: Color.colorWhite,
    width: Width.width_81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: FontSize.fs_17,
  },
  frameWrapper: {
    width: Width.width_61,
    paddingLeft: Padding.padding_2,
    height: Height.height_15,
    flexDirection: "row",
  },
  starParent: {
    width: Width.width_59,
    gap: Gap.gap_8,
    height: Height.height_15,
    zIndex: 1,
    flexDirection: "row",
  },
  frameInner: {
    width: Width.width_15,
    height: Height.height_15,
    zIndex: 1,
  },
  loneStarParent: {
    width: Width.width_36,
    height: Height.height_15,
  },
  loneStarIcon: {
    left: 0,
  },
  loneStarIcon2: {
    left: 21,
  },
  r10300: {
    width: Width.width_114,
    color: Color.colorLimegreen,
  },
  r103002: {
    margin: 0,
    paddingLeft: Padding.padding_23,
  },
});

export default FrameComponent111;
