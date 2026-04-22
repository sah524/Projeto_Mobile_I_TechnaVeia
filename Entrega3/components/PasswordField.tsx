import * as React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import {
  Width,
  Gap,
  Padding,
  Height,
  Border,
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const PasswordField = () => {
  return (
    <View style={[styles.passwordField, styles.confirmationLayout]}>
      <View style={[styles.passwordContainer, styles.confirmAreaLayout]}>
        <TextInput
          style={[styles.passwordArea, styles.passwordAreaFlexBox]}
          placeholder="Senha:"
          multiline={false}
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
        />
        <TextInput style={styles.passwordInput} multiline={false} />
      </View>
      <View style={[styles.confirmArea, styles.confirmAreaLayout]}>
        <TextInput
          style={[styles.confirmContainer, styles.passwordAreaFlexBox]}
          placeholder="Confirmação de Senha:"
          multiline={false}
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
        />
        <View style={[styles.confirmation, styles.confirmationLayout]}>
          <TextInput style={styles.passwordInput} multiline={false} />
          <View style={styles.passwordValidator}>
            <Text style={styles.aSenhaDeve}>
              A senha deve conter 8 digitos e letra maiuscula e minuscula .
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmationLayout: {
    zIndex: 0,
    width: Width.width_332,
  },
  confirmAreaLayout: {
    gap: Gap.gap_8,
    zIndex: 0,
    width: Width.width_332,
  },
  passwordAreaFlexBox: {
    paddingLeft: Padding.padding_6,
    height: Height.height_19,
    textAlign: "left",
    flexDirection: "row",
  },
  passwordField: {
    height: 214,
    paddingBottom: 34,
    gap: Gap.gap_11,
  },
  passwordContainer: {
    height: 77,
  },
  passwordArea: {
    width: 58,
    textAlign: "left",
  },
  passwordInput: {
    height: Height.height_50,
    borderRadius: Border.br_15,
    backgroundColor: Color.colorLavender200,
    borderStyle: "solid",
    borderColor: Color.colorDeepskyblue,
    borderWidth: 1,
    textAlign: "left",
    width: Width.width_332,
  },
  confirmArea: {
    height: 92,
  },
  confirmContainer: {
    width: 179,
    textAlign: "left",
  },
  confirmation: {
    height: 65,
    gap: Gap.gap_3,
  },
  passwordValidator: {
    width: 316,
    paddingLeft: Padding.padding_19,
    height: Height.height_12,
    flexDirection: "row",
    zIndex: 0,
  },
  aSenhaDeve: {
    width: 297,
    fontSize: FontSize.fs_10,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray300,
    height: Height.height_12,
    textAlign: "left",
  },
});

export default PasswordField;
