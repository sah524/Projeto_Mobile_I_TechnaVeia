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

const FrameComponent1111 = () => {
  return (
    <View style={styles.inicialInner}>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <View style={styles.ellipseWrapper}>
          <Image style={styles.frameItem} contentFit="cover" />
        </View>
        <View style={styles.frameParent}>
          <View style={styles.quantumWrapper}>
            <Text style={[styles.quantum, styles.r10000Typo]}>Quantum</Text>
          </View>
          <View style={styles.quantumStarsWrapper}>
            <View style={styles.quantumStars}>
              <Image
                style={[styles.quantumStarsRating, styles.quantumPosition]}
                contentFit="cover"
              />
              <Image
                style={[styles.quantumStarsRating2, styles.quantumPosition]}
                contentFit="cover"
              />
              <Image
                style={[styles.quantumStarsRating3, styles.quantumPosition]}
                contentFit="cover"
              />
            </View>
          </View>
          <Text style={[styles.r10000, styles.r10000Typo]}>
            <UnorderedList style={styles.r100002}>
              <ListItem>R$ 100,00</ListItem>
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
  r10000Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: FontSize.fs_17,
    height: Height.height_21,
    zIndex: 1,
  },
  quantumPosition: {
    width: Width.width_15,
    top: 0,
    position: "absolute",
    height: Height.height_15,
    zIndex: 1,
  },
  inicialInner: {
    zIndex: 0,
    height: 87,
    paddingBottom: 17,
    flexDirection: "row",
    width: Width.width_390,
  },
  rectangleParent: {
    paddingHorizontal: Padding.padding_9,
    paddingTop: Padding.padding_4,
    paddingBottom: Padding.padding_6,
    gap: Gap.gap_8,
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
    width: Width.width_112,
    gap: Gap.gap_1_5,
    zIndex: 1,
  },
  quantumWrapper: {
    width: 88,
    paddingLeft: Padding.padding_10,
    height: Height.height_21,
    flexDirection: "row",
  },
  quantum: {
    width: Width.width_81,
    color: Color.colorWhite,
  },
  quantumStarsWrapper: {
    width: 71,
    paddingLeft: 17,
    height: Height.height_15,
    flexDirection: "row",
  },
  quantumStars: {
    width: 54,
    height: Height.height_15,
    zIndex: 1,
  },
  quantumStarsRating: {
    left: 0,
  },
  quantumStarsRating2: {
    left: 21,
  },
  quantumStarsRating3: {
    left: 39,
  },
  r10000: {
    width: 115,
    color: Color.colorLimegreen,
  },
  r100002: {
    margin: 0,
    paddingLeft: Padding.padding_23,
  },
});

export default FrameComponent1111;
