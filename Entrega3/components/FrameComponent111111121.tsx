import * as React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontFamily,
  FontSize,
  Width,
  Height,
  Border,
  Padding,
} from "../GlobalStyles";

const FrameComponent111111121 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.rectangleParent}>
        <TextInput style={styles.frameChild} multiline={false} />
        <View style={styles.emailContainer}>
          <View style={styles.placeholderOneParent}>
            <Text style={[styles.placeholderOne, styles.placeholderTypo]}>
              ..........
            </Text>
            <Text style={[styles.placeholderTwo, styles.placeholderTypo]}>
              ..........
            </Text>
          </View>
          <View style={styles.emailContainerInner}>
            <View style={[styles.eyeParent, styles.eyeIconLayout]}>
              <Image
                style={[styles.eyeIcon, styles.eyeIconLayout]}
                contentFit="cover"
              />
              <Image style={[styles.eyeIcon2, styles.eyeIconLayout]} />
            </View>
          </View>
          <View style={styles.passwordBox} />
        </View>
      </View>
      <View style={styles.senhaParent}>
        <Text style={styles.senhaTypo}>Senha:</Text>
        <Text style={[styles.senha2, styles.senhaTypo]}>Senha:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholderTypo: {
    color: Color.colorGray200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.fs_40,
    width: Width.width_120,
    height: Height.height_56,
    textAlign: "left",
  },
  eyeIconLayout: {
    height: Height.height_16,
    width: Width.width_16,
  },
  senhaTypo: {
    width: Width.width_52,
    color: Color.colorGray300,
    fontSize: FontSize.fs_15,
    height: Height.height_19,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    top: 0,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameParent: {
    height: Height.height_70,
    zIndex:0,
    width: Width.width_332,
  },
  rectangleParent: {
    top: 6,
    height: Height.height_64,
    left: 0,
    position: "absolute",
    zIndex:0,
    width: Width.width_332,
  },
  frameChild: {
    top: 14,
    textAlign: "left",
    height: Height.height_50,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    backgroundColor: Color.colorLavender200,
    borderRadius: Border.br_15,
    left: 0,
    position: "absolute",
    width: Width.width_332,
  },
  emailContainer: {
    alignItems: "flex-end",
    paddingLeft: Padding.padding_32,
    paddingRight: Padding.padding_19,
    paddingBottom: Padding.padding_8,
    gap: 148,
    flexDirection: "row",
    zIndex: 2,
    top: 0,
    height: Height.height_64,
    left: 0,
    position: "absolute",
    width: Width.width_332,
  },
  placeholderOneParent: {
    width: 117,
    height: Height.height_56,
    flexDirection: "row",
  },
  placeholderOne: {
    zIndex: 1,
  },
  placeholderTwo: {
    marginLeft: -120,
    zIndex: 3,
  },
  emailContainerInner: {
    height: 25,
    justifyContent: "flex-end",
    paddingBottom: Padding.padding_9,
    width: Width.width_16,
  },
  eyeParent: {
    zIndex: 1,
  },
  eyeIcon: {
    zIndex: 1,
    top: 0,
    height: Height.height_16,
    left: 0,
    position: "absolute",
  },
  eyeIcon2: {
    zIndex: 3,
    top: 0,
    height: Height.height_16,
    left: 0,
    position: "absolute",
  },
  passwordBox: {
    right: 0,
    bottom: 0,
    zIndex: 2,
    height: Height.height_50,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    backgroundColor: Color.colorLavender200,
    borderRadius: Border.br_15,
    left: 0,
    position: "absolute",
    width: Width.width_332,
  },
  senhaParent: {
    left: 15,
    width: Width.width_49,
    height: Height.height_19,
    zIndex: 2,
    top: 0,
    position: "absolute",
  },
  senha2: {
    zIndex: 2,
  },
});

export default FrameComponent111111121;
