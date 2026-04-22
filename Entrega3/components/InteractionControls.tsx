import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import RecipientDetails from "./RecipientDetails";
import Trash2 from "./Trash2";
import {
  Color,
  Border,
  Height,
  Width,
  Gap,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const InteractionControls = () => {
  return (
    <View style={styles.interactionControls}>
      <RecipientDetails avatar={require("../assets/Avatar.png")} size={48} />
      <RecipientDetails
        avatar={require("../assets/Ellipse-5.png")}
        recipientDetailsPaddingTop={14}
        recipientDetailsPaddingBottom={1}
        size={48}
      />
      <View style={[styles.recipientDetails, styles.recipientLayout]}>
        <View style={[styles.recipientDetailsChild, styles.recipientLayout]} />
        <Image
          style={styles.recipientDetailsItem}
          contentFit="cover"
          source={require("../assets/Ellipse-6.png")}
        />
        <View style={styles.recipientDetailsInner}>
          <View style={styles.novacoreParent}>
            <Text style={[styles.novacore, styles.novacoreTypo]}>NovaCore</Text>
            <View style={styles.messageDetails}>
              <Text
                style={[styles.mensagemDeTexto, styles.novacoreTypo]}
              >{`Mensagem de Texto recebida `}</Text>
            </View>
          </View>
        </View>
        <View style={styles.trash4Wrapper}>
          <Trash2 size={48} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipientLayout: {
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
  novacoreTypo: {
    textAlign: "left",
    fontStyle: "italic",
    zIndex: 1,
  },
  interactionControls: {
    width: 390,
    height: 226,
    zIndex: 0,
    gap: Gap.gap_8,
  },
  recipientDetails: {
    alignItems: "flex-end",
    paddingHorizontal: Padding.padding_8_5,
    paddingTop: Padding.padding_4_5,
    paddingBottom: 0,
    gap: Gap.gap_11,
    flexDirection: "row",
  },
  recipientDetailsChild: {
    display: "none",
  },
  recipientDetailsItem: {
    height: Height.height_49,
    width: Width.width_53,
    zIndex: 1,
  },
  recipientDetailsInner: {
    width: Width.width_256,
    height: 65,
    paddingRight: Padding.padding_26,
    paddingBottom: Padding.padding_15,
    justifyContent: "flex-end",
  },
  novacoreParent: {
    height: Height.height_50,
    zIndex: 1,
    width: Width.width_230,
    gap: Gap.gap_11,
  },
  novacore: {
    width: Width.width_87,
    height: Height.height_20,
    fontSize: FontSize.fs_17,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDeepskyblue,
  },
  messageDetails: {
    paddingLeft: Padding.padding_16,
    height: Height.height_19,
    width: Width.width_230,
    flexDirection: "row",
  },
  mensagemDeTexto: {
    width: Width.width_217,
    fontSize: FontSize.fs_15,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray400,
    height: Height.height_19,
  },
  trash4Wrapper: {
    width: Width.width_25,
    height: 44,
    paddingBottom: Padding.padding_19,
    justifyContent: "flex-end",
  },
});

export default InteractionControls;
