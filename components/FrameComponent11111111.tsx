import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  Color,
  Border,
  Width,
  Height,
  FontFamily,
  FontSize,
  Padding,
} from "../GlobalStyles";

const FrameComponent11111111 = () => {
  return (
    <View style={styles.otherOptionsWrapper}>
      <View style={styles.otherOptions}>
        <View style={styles.providerList}>
          <View style={[styles.providerRowOne, styles.providerChildLayout]}>
            <View
              style={[styles.providerRowOneChild, styles.providerChildLayout]}
            />
            <View style={styles.providerRowTwo}>
              <View
                style={[styles.providerOptions, styles.providerOptionsPosition]}
              >
                <Text style={[styles.gmail, styles.gmailTypo]}>GMAIL</Text>
                <Text style={[styles.gmail2, styles.gmailTypo]}>GMAIL</Text>
              </View>
              <Pressable
                style={[styles.providerRowTwoChild, styles.registrarPosition]}
              />
            </View>
          </View>
          <View style={[styles.providerRowOne, styles.providerChildLayout]}>
            <View
              style={[styles.providerRowOneChild, styles.providerChildLayout]}
            />
            <View style={styles.providerRowTwo}>
              <View
                style={[styles.microsoftParent, styles.providerOptionsPosition]}
              >
                <Text style={[styles.microsoft, styles.microsoftTypo]}>
                  MICROSOFT
                </Text>
                <Text style={[styles.microsoft2, styles.microsoftTypo]}>
                  MICROSOFT
                </Text>
              </View>
              <Pressable
                style={[styles.providerRowTwoChild, styles.registrarPosition]}
              />
            </View>
          </View>
        </View>
        <View style={[styles.registerDetailsWrapper, styles.registerLayout1]}>
          <View style={[styles.registerDetails, styles.registerLayout1]}>
            <View style={[styles.registerLinkArea, styles.registerLayout]}>
              <Text style={[styles.noTemConta, styles.temTypo]}>
                Não tem conta ?
              </Text>
              <Text style={[styles.noTemConta2, styles.temTypo]}>
                Não tem conta ?
              </Text>
            </View>
            <View style={[styles.registerLinkArea2, styles.registerLayout]}>
              <Pressable style={styles.registrarPosition} onPress={() => {}}>
                <Text style={[styles.registrar2, styles.temTypo]}>
                  Registrar
                </Text>
              </Pressable>
              <Pressable
                style={[styles.registrar3, styles.registrarPosition]}
                onPress={() => {}}
              >
                <Text style={[styles.registrar2, styles.temTypo]}>
                  Registrar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  providerChildLayout: {
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    backgroundColor: Color.colorLavender200,
    borderRadius: Border.br_15,
    width: Width.width_150,
    height: Height.height_50,
  },
  providerOptionsPosition: {
    height: Height.height_18,
    top: 16,
    position: "absolute",
  },
  gmailTypo: {
    width: Width.width_52,
    textAlign: "left",
    color: Color.colorGray200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.fs_15,
    left: 0,
    top: 0,
    height: Height.height_18,
    position: "absolute",
  },
  registrarPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  microsoftTypo: {
    width: 94,
    textAlign: "left",
    color: Color.colorGray200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.fs_15,
    height: Height.height_18,
  },
  registerLayout1: {
    height: Height.height_12,
    flexDirection: "row",
    zIndex: 0,
  },
  registerLayout: {
    zIndex: 1,
    height: Height.height_12,
  },
  temTypo: {
    fontSize: FontSize.fs_10,
    height: Height.height_12,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
  },
  otherOptionsWrapper: {
    width: 342,
    paddingLeft: Padding.padding_19,
    flexDirection: "row",
    height: 95,
    zIndex: 0,
  },
  otherOptions: {
    gap: 33,
    width: 323,
    height: 95,
    zIndex: 0,
  },
  providerList: {
    gap: 23,
    height: Height.height_50,
    width: 323,
    flexDirection: "row",
    zIndex: 0,
  },
  providerRowOne: {
    flexDirection: "row",
  },
  providerRowOneChild: {
    display: "none",
  },
  providerRowTwo: {
    zIndex: 2,
    width: Width.width_150,
    height: Height.height_50,
  },
  providerOptions: {
    left: 45,
    width: 49,
  },
  gmail: {
    zIndex: 1,
  },
  gmail2: {
    zIndex: 3,
  },
  providerRowTwoChild: {
    zIndex: 2,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    backgroundColor: Color.colorLavender200,
    borderRadius: Border.br_15,
    width: Width.width_150,
    height: Height.height_50,
  },
  microsoftParent: {
    left: 34,
    width: 91,
    flexDirection: "row",
  },
  microsoft: {
    zIndex: 1,
  },
  microsoft2: {
    marginLeft: -94,
    zIndex: 3,
  },
  registerDetailsWrapper: {
    width: 220,
    paddingLeft: 89,
  },
  registerDetails: {
    width: 131,
    gap: 7,
  },
  registerLinkArea: {
    width: 79,
    flexDirection: "row",
  },
  noTemConta: {
    width: 82,
    fontSize: FontSize.fs_10,
    color: Color.colorGray200,
  },
  noTemConta2: {
    marginLeft: -82,
    width: 82,
    fontSize: FontSize.fs_10,
    color: Color.colorGray200,
    zIndex: 1,
  },
  registerLinkArea2: {
    width: 45,
  },
  registrar2: {
    color: Color.colorDeepskyblue,
    width: Width.width_48,
  },
  registrar3: {
    zIndex: 1,
  },
});

export default FrameComponent11111111;
