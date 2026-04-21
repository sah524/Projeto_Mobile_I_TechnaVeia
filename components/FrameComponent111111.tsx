import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Trash2 from "./Trash2";
import {
  Padding,
  Gap,
  Color,
  Border,
  Height,
  Width,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const FrameComponent111111 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <View style={styles.rectangleGroup}>
        <Image style={styles.frameItem} contentFit="cover" />
        <View style={styles.frameWrapper}>
          <View style={styles.dbitoEloParent}>
            <Text style={[styles.dbitoElo, styles.dbitoEloTypo]}>
              Débito - Elo
            </Text>
            <View style={styles.placeholderSpaceWrapper}>
              <Text style={[styles.placeholderSpace, styles.dbitoEloTypo]}>
                0300 **** **** 4758
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.trash3Wrapper}>
        <Trash2 size={48} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dbitoEloTypo: {
    textAlign: "left",
    fontStyle: "italic",
    zIndex: 1,
  },
  rectangleParent: {
    paddingHorizontal: Padding.padding_10_5,
    paddingTop: 7,
    paddingBottom: 12,
    gap: Gap.gap_100,
    alignItems: "flex-end",
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
  rectangleGroup: {
    width: 229,
    gap: Gap.gap_26,
    zIndex: 1,
    height: Height.height_50,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  frameItem: {
    width: Width.width_50,
    zIndex: 1,
    height: Height.height_50,
  },
  frameWrapper: {
    height: Height.height_48,
    paddingBottom: Padding.padding_1,
    justifyContent: "flex-end",
    width: Width.width_153,
  },
  dbitoEloParent: {
    height: 47,
    gap: Gap.gap_8,
    width: Width.width_153,
    zIndex: 1,
  },
  dbitoElo: {
    width: Width.width_100,
    height: Height.height_21,
    fontSize: FontSize.fs_17,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color. colorDeepskyblue,
  },
  placeholderSpaceWrapper: {
    paddingLeft: Padding.padding_2,
    height: Height.height_18,
    width: Width.width_153,
    flexDirection: "row",
  },
  placeholderSpace: {
    width: 154,
    fontSize: FontSize.fs_15,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray400,
    height: Height.height_18,
  },
  trash3Wrapper: {
    width: Width.width_25,
    height: Height.height_32,
    paddingBottom: Padding.padding_7,
    justifyContent: "flex-end",
    zIndex: 1,
  },
});

export default FrameComponent111111;
