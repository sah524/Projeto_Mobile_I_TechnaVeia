import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
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

export type RecipientDetailsType = {
  avatar?: ImageSourcePropType;
  size?: 48;

  /** Style props */
  recipientDetailsPaddingTop?: number | string;
  recipientDetailsPaddingBottom?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RecipientDetails = ({
  avatar,
  recipientDetailsPaddingTop,
  recipientDetailsPaddingBottom,
  size = 48,
}: RecipientDetailsType) => {
  const recipientDetailsStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingTop", recipientDetailsPaddingTop),
      ...getStyleValue("paddingBottom", recipientDetailsPaddingBottom),
    };
  }, [recipientDetailsPaddingTop, recipientDetailsPaddingBottom]);

  return (
    <View
      style={[
        styles.recipientDetails,
        styles.recipientLayout,
        recipientDetailsStyle,
      ]}
    >
      <View style={[styles.recipientDetailsChild, styles.recipientLayout]} />
      <View style={styles.profileDetails}>
        <Image style={styles.avatarIcon} contentFit="cover" source={avatar} />
      </View>
      <View style={styles.novacoreParent}>
        <Text style={[styles.novacore, styles.novacoreTypo]}>NovaCore</Text>
        <View style={styles.mensagemDeTextoRecebidaWrapper}>
          <Text
            style={[styles.mensagemDeTexto, styles.novacoreTypo]}
          >{`Mensagem de Texto recebida `}</Text>
        </View>
      </View>
      <View style={styles.deletionAction}>
        <Trash2 size={size} />
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
  recipientDetails: {
    paddingHorizontal: Padding.padding_8_5,
    paddingTop: Padding.padding_4_5,
    paddingBottom: 9,
    gap: Gap.gap_11,
    flexDirection: "row",
  },
  recipientDetailsChild: {
    display: "none",
  },
  profileDetails: {
    height: Height.height_56,
    paddingTop: Padding.padding_7,
    width: Width.width_53,
    zIndex: 1,
  },
  avatarIcon: {
    height: Height.height_49,
    zIndex: 1,
    width: Width.width_53,
  },
  novacoreParent: {
    height: Height.height_50,
    width: Width.width_256,
    paddingRight: Padding.padding_26,
    zIndex: 1,
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
  mensagemDeTextoRecebidaWrapper: {
    width: Width.width_230,
    paddingLeft: Padding.padding_16,
    height: Height.height_19,
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
  deletionAction: {
    width: Width.width_25,
    height: Height.height_37,
    paddingTop: Padding.padding_12,
    zIndex: 1,
  },
});

export default RecipientDetails;
