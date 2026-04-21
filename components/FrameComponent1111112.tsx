import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import {
  Height,
  Color,
  FontFamily,
  FontSize,
  Width,
  Gap,
  Padding,
  Border,
} from "../GlobalStyles";

const FrameComponent1111112 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.emailEntryWrapper, styles.emailLayout]}>
        <View style={[styles.emailEntry, styles.emailLayout]}>
          <Text style={[styles.eMail, styles.mailTypo]}>E-Mail:</Text>
          <Text style={[styles.eMail2, styles.mailTypo]}>E-Mail:</Text>
        </View>
      </View>
      <TextInput
        style={styles.frameChild}
        placeholder="Exemoplo@exemplo.com"
        multiline={false}
        placeholderTextColor="rgba(255, 255, 255, 0.31)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailLayout: {
    height: Height.height_19,
    flexDirection: "row",
  },
  mailTypo: {
    color: Color.colorGray300,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.fs_15,
    width: Width.width_55,
    textAlign: "left",
    height: Height.height_19,
  },
  frameParent: {
    height: Height.height_70,
    gap: Gap.gap_1,
    zIndex: 0,
    width: Width.width_332,
  },
  emailEntryWrapper: {
    width: 67,
    paddingLeft: Padding.padding_15,
    flexDirection: "row",
    zIndex: 0,
  },
  emailEntry: {
    width: Width.width_52,
    zIndex: 1,
    flexDirection: "row",
  },
  eMail: {
    textAlign: "left",
  },
  eMail2: {
    zIndex: 1,
    marginLeft: -55,
    textAlign: "left",
  },
  frameChild: {
    height: Height.height_50,
    borderRadius: Border.br_15,
    backgroundColor: Color.colorLavender200,
    borderStyle: "solid",
    borderColor: Color.colorLavender100,
    borderWidth: 1,
    textAlign: "left",
    flexDirection: "row",
    width: Width.width_332,
  },
});

export default FrameComponent1111112;
