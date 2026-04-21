import * as React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import {
  Padding,
  Color,
  Border,
  Height,
  Width,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const ContactDetails = () => {
  return (
    <View style={[styles.contactDetails, styles.contactLayout2]}>
      <View style={[styles.contactInfo, styles.contactLayout2]}>
        <TextInput
          style={[styles.contactElements, styles.contactLayout1]}
          placeholder="Guará R.07 CS 32."
          multiline={false}
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
        />
        <TextInput
          style={[styles.contactElements2, styles.contactLayout1]}
          placeholder="MariaJfs@gmail.com"
          multiline={false}
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
        />
        <TextInput
          style={[styles.contactElements3, styles.contactLayout]}
          placeholder="999.999.999-99"
          multiline={false}
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
        />
        <TextInput
          style={[styles.contactElements3, styles.contactLayout]}
          placeholder="(99) 99999-9999"
          multiline={false}
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
        />
        <TextInput
          style={[styles.contactElements5, styles.contactLayout]}
          placeholder="17 de Março de 1985"
          multiline={false}
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
        />
      </View>
      <View style={styles.editarPerfilWrapper}>
        <Text style={styles.editarPerfil}>Editar Perfil</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactLayout2: {
    zIndex: 0,
    width: 368,
  },
  contactLayout1: {
    paddingBottom: Padding.padding_11_5,
    paddingTop: Padding.padding_12_5,
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
    height: Height.height_51,
    width: Width.width_369,
    textAlign: "left",
    flexDirection: "row",
  },
  contactLayout: {
    paddingBottom: Padding.padding_13_5,
    textAlign: "left",
    paddingTop: Padding.padding_12_5,
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
    height: Height.height_51,
    width: Width.width_369,
  },
  contactDetails: {
    height: 386,
    gap: 38,
  },
  contactInfo: {
    height: 328,
    gap: 19,
  },
  contactElements: {
    paddingHorizontal: 20,
    textAlign: "left",
  },
  contactElements2: {
    paddingHorizontal: Padding.padding_11_5,
    textAlign: "left",
  },
  contactElements3: {
    paddingHorizontal: Padding.padding_11_5,
  },
  contactElements5: {
    paddingHorizontal: 16,
  },
  editarPerfilWrapper: {
    width: 285,
    paddingLeft: 115,
    height: Height.height_20,
    flexDirection: "row",
    zIndex: 0,
  },
  editarPerfil: {
    width: 173,
    fontSize: FontSize.fs_16,
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDeepskyblue100,
    height: Height.height_20,
    textAlign: "left",
  },
});

export default ContactDetails;
