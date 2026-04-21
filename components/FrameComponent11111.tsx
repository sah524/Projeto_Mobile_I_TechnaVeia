import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Trash2 from "./Trash2";
import {
  Color,
  Border,
  Height,
  Width,
  Padding,
  Gap,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const FrameComponent11111 = () => {
  return (
    <View style={[styles.rectangleParent, styles.frameChildLayout]}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={styles.optionColumn}>
        <View style={styles.optionRow}>
          <Image style={styles.backgroundElementsIcon} contentFit="cover" />
        </View>
        <View style={styles.paymentBrandColumn}>
          <Text style={[styles.crditoElo, styles.crditoEloTypo]}>
            Crédito - Elo
          </Text>
          <View style={styles.brandPlaceholder}>
            <Text style={[styles.emptySpace, styles.crditoEloTypo]}>
              0300 **** **** 4758
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.actionColumn}>
        <Trash2 size={48} />
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
 
    height: Height.height_71,
    width: Width.width_391,
  },
  crditoEloTypo: {
    textAlign: "left",
    fontStyle: "italic",
    zIndex: 1,
  },
  rectangleParent: {
    paddingHorizontal: Padding.padding_10_5,
    paddingTop: Padding.padding_4_5,
    paddingBottom: 12,
    gap: Gap.gap_100,
    flexDirection: "row",
  },
  frameChild: {
    display: "none",
  },
  optionColumn: {
    width: 229,
    zIndex: 0,
    gap: Gap.gap_26,
    height: 53,
    flexDirection: "row",
  },
  optionRow: {
    paddingTop: Padding.padding_3,
    width: Width.width_50,
    zIndex: 1,
    height: 53,
  },
  backgroundElementsIcon: {
    height: Height.height_50,
    zIndex: 1,
    width: Width.width_50,
  },
  paymentBrandColumn: {
    height: Height.height_49,
    gap: Gap.gap_10,
    width: Width.width_153,
    zIndex: 1,
  },
  crditoElo: {
    width: 107,
    height: Height.height_21,
    fontSize: FontSize.fs_17,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDeepskyblue,
  },
  brandPlaceholder: {
    paddingLeft: Padding.padding_2,
    height: Height.height_18,
    width: Width.width_153,
    flexDirection: "row",
  },
  emptySpace: {
    width: 154,
    fontSize: FontSize.fs_15,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray400,
    height: Height.height_18,
  },
  actionColumn: {
    width: Width.width_25,
    height: Height.height_37,
    paddingTop: Padding.padding_12,
    zIndex: 1,
  },
});

export default FrameComponent11111;
