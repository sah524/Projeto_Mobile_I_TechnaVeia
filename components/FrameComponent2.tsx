import * as React from "react";
import { TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Width,
  FontFamily,
  Height,
  Padding,
  Gap,
  Color,
  FontSize,
  Border,
} from "../GlobalStyles";

const FrameComponent2 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameWrapper}>
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View style={styles.frameContainer}>
          <View style={styles.frameGroup}>
            <TextInput
              style={styles.frameChild}
              placeholder="Cupom10Desconto"
              multiline={false}
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
            />
            <View
              style={[
                styles.subtotalCupomTotalParent,
                styles.emptyWrapperLayout,
              ]}
            >
              <Text
                style={[
                  styles.subtotalCupomTotal,
                  styles.subtotalCupomTotalTypo,
                ]}
              >
                <Text style={styles.subtotalCupom}>
                  SubTotal{"\n"}Cupom {"\n"}
                </Text>
                <Text style={styles.total}>Total</Text>
              </Text>
              <View style={[styles.emptyWrapper, styles.emptyWrapperLayout]}>
                <Text
                  style={[
                    styles.subtotalCupomTotal,
                    styles.subtotalCupomTotalTypo,
                  ]}
                >
                  <Text style={styles.subtotalCupom}>
                    120,00{"\n"}10,00 {"\n"}
                  </Text>
                  <Text style={styles.total}>110,00</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.formaDePagamentoCrdito2Parent, styles.parentLayout]}
        >
          <Text
            style={[
              styles.formaDePagamentoContainer,
              styles.subtotalCupomTotalTypo,
            ]}
          >
            <Text style={styles.formaDePagamento}>
              Forma de Pagamento - Crédito 2X - 55,00{"\n"}
            </Text>
            <Text style={styles.cartoEloFinal}>Cartão Elo final 3570</Text>
          </Text>
          <View style={[styles.trocarWrapper, styles.parentLayout]}>
            <Text style={[styles.trocar, styles.trocarTypo]}>TROCAR</Text>
          </View>
        </View>
        <View style={styles.frameView}>
          <View style={[styles.rectangleParent, styles.frameItemLayout]}>
            <Pressable
              style={[styles.frameItem, styles.frameItemLayout]}
              onPress={() => navigation.navigate("FrameComponent111")}
            />
            <View style={styles.confirmarWrapper}>
              <Text
                style={[styles.confirmar, styles.trocarTypo]}
              >{`Confirmar `}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: Width.width_310,
    zIndex: 0,
  },
  emptyWrapperLayout: {
    height: 63,
    zIndex:0,
  },
  subtotalCupomTotalTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontStyle: "italic",
  },
  trocarTypo: {
    fontFamily: FontFamily.lalezarRegular,
    textAlign: "left",
  },
  frameItemLayout: {
    width: Width.width_249,
    height: Height.height_50,
  },
  frameWrapper: {
    width: Width.width_332,
    justifyContent: "flex-end",
    paddingRight: Padding.padding_22,
    flexDirection: "row",
    height: 346,
    zIndex:0,
  },
  frameParent: {
    gap: 46,
    height: 346,
  },
  frameContainer: {
    width: 307,
    height: 151,
    paddingLeft: Padding.padding_10,
    paddingBottom: Padding.padding_22,
    flexDirection: "row",
    zIndex:0,
  },
  frameGroup: {
    height: 129,
    gap: Gap.gap_36,
    width: 297,
    zIndex:0,
  },
  frameChild: {
    height: Height.height_30,
    paddingLeft: Padding.padding_5,
    textAlign: "left",
    width: 275,
    flexDirection: "row",
  },
  subtotalCupomTotalParent: {
    gap: 171,
    width: 297,
    flexDirection: "row",
  },
  subtotalCupomTotal: {
    height: 62,
    width: Width.width_63,
  },
  subtotalCupom: {
    color: Color.colorGray500,
    fontSize: FontSize.fs_15,
  },
  total: {
    fontSize: FontSize.fs_20,
    color: Color.colorWhite,
  },
  emptyWrapper: {
    paddingTop: Padding.padding_1,
    width: Width.width_63,
  },
  formaDePagamentoCrdito2Parent: {
    height: 53,
    gap: Gap.gap_3,
  },
  formaDePagamentoContainer: {
    width: 302,
    height: 34,
    color: Color.colorGray500,
  },
  formaDePagamento: {
    fontSize: FontSize.fs_15,
  },
  cartoEloFinal: {
    fontSize: 13,
  },
  trocarWrapper: {
    paddingLeft: 275,
    height: Height.height_16,
    flexDirection: "row",
  },
  trocar: {
    width: 38,
    fontSize: FontSize.fs_10,
    color: Color.colorDeepskyblue,
    height: Height.height_16,
  },
  frameView: {
    paddingLeft: Padding.padding_26,
    height: Height.height_50,
    width: 275,
    flexDirection: "row",
    zIndex: 0,
  },
  rectangleParent: {
    flexDirection: "row",
    zIndex: 0,
  },
  frameItem: {
    borderRadius: Border.br_15,
    backgroundColor: Color.colorDeepskyblue,
  },
  confirmarWrapper: {
    zIndex: 1,
    width: 103,
    height: 45,
    paddingTop: 7,
    marginLeft: -177,
  },
  confirmar: {
    width: 106,
    height: 38,
    fontSize: FontSize.fs_24,
    zIndex: 1,
    color: Color.colorWhite,
  },
});

export default FrameComponent2;
