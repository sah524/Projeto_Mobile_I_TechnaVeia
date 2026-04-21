import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import {
  Height,
  Color,
  Border,
  Width,
  Gap,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.codeEntryParent}>
      <View style={styles.codeEntry}>
        <Text style={[styles.digiteOCdigo, styles.codeValueTypo]}>
          Digite o código:
        </Text>
      </View>
      <View style={[styles.codeBoxes, styles.codeBoxesLayout]}>
        <TextInput
          style={[styles.codeBoxPlaceholders, styles.codeLayout]}
          multiline={false}
        />
        <View style={styles.codeLayout} />
        <TextInput
          style={[styles.codeBoxPlaceholders, styles.codeLayout]}
          multiline={false}
        />
        <View style={styles.codeInput}>
          <Text style={[styles.codeValue, styles.codeValueTypo]}>-</Text>
        </View>
        <TextInput
          style={[styles.codeBoxPlaceholders, styles.codeLayout]}
          multiline={false}
        />
        <View style={[styles.resendArea, styles.codeBoxesLayout]}>
          <TextInput
            style={[styles.codeBoxPlaceholders, styles.codeLayout]}
            multiline={false}
          />
          <View style={styles.codeLayout} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  codeValueTypo: {
    fontStyle: "italic",
    textAlign: "left",
  },
  codeBoxesLayout: {
    height: Height.height_45,
    flexDirection: "row",
    zIndex: 0,
  },
  codeLayout: {
    borderWidth: 1,
    borderColor: Color.colorLavender100,
    borderStyle: "solid",
    backgroundColor: Color.colorLavender200,
    borderRadius: Border.br_15,
    width: Width.width_45,
    height: Height.height_45,
  },
  codeEntryParent: {
    height: 112,
    paddingBottom: 17,
    gap: Gap.gap_32,
    zIndex: 0,
    width: 340,
  },
  codeEntry: {
    width: 123,
    paddingLeft: Padding.padding_9,
    flexDirection: "row",
    height: Height.height_18,
    zIndex: 0,
  },
  digiteOCdigo: {
    width: Width.width_117,
    fontSize: FontSize.fs_15,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray300,
    textAlign: "left",
    height: Height.height_18,
    fontStyle: "italic",
  },
  codeBoxes: {
    gap: Gap.gap_11,
    width: 340,
  },
  codeBoxPlaceholders: {
    textAlign: "left",
  },
  codeInput: {
    width: Width.width_10,
    height: 37,
    paddingTop: 13,
    zIndex: 0,
  },
  codeValue: {
    width: 13,
    height: Height.height_24,
    fontSize: FontSize.fs_20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  resendArea: {
    width: 95,
    gap: Gap.gap_5,
  },
});

export default FrameComponent;
