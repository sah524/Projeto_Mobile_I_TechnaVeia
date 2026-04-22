import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Height,
  Padding,
  Border,
  Width,
} from "../GlobalStyles";

const OrderStatusOptions = () => {
  return (
    <View style={styles.orderStatusOptions}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <Text
          style={[styles.emAndamento, styles.studyTypo]}
        >{`Em Andamento `}</Text>
        <Text style={[styles.documents, styles.studyTypo]}>1</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.frameChild} />
        <Text
          style={[styles.finalizados, styles.canceladosTypo]}
        >{`Finalizados `}</Text>
        <Text style={[styles.study, styles.studyTypo]}>6</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={styles.frameChild} />
        <Text
          style={[styles.cancelados, styles.canceladosTypo]}
        >{`Cancelados `}</Text>
        <Text style={[styles.study, styles.studyTypo]}>0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  studyTypo: {
    zIndex: 1,
    textAlign: "left",
    color: Color.colorGray400,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: FontSize.fs_20,
    height: Height.height_24,
  },
  rectangleLayout: {
    paddingBottom: Padding.padding_11_5,
    paddingHorizontal: Padding.padding_11_5,
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
  canceladosTypo: {
    height: Height.height_26,
    zIndex: 1,
    textAlign: "left",
    color: Color.colorGray400,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: FontSize.fs_20,
  },
  orderStatusOptions: {
    height: 192,
    width: 368,
    zIndex: 0,
    gap: 21,
  },
  rectangleParent: {
    paddingHorizontal: 20,
    paddingBottom: 13,
    gap: 162,
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
    height: Height.height_51,
    width: Width.width_369,
  },
  emAndamento: {
    width: 153,
  },
  documents: {
    width: 13,
  },
  rectangleGroup: {
    gap: 207,
  },
  finalizados: {
    width: 116,
  },
  study: {
    width: 17,
  },
  rectangleContainer: {
    gap: 198,
  },
  cancelados: {
    width: 121,
  },
});

export default OrderStatusOptions;
