import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Line33 from "../assets/Line-3.svg";
import {
  Width,
  Height,
  FontFamily,
  FontSize,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";

const FrameComponent1 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.frameParent, styles.frameLayout]}>
      <View style={styles.capturaDeTela2532026908Parent}>
        <Pressable
          style={styles.capturaDeTela2532026908}
          onPress={() => navigation.navigate("FrameComponent1111111111")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/Captura-de-tela-25-3-2026-908-web-whatsapp-com-removebg-preview-1.png")}
          />
        </Pressable>
        <Line33
          style={styles.frameChild}
          width={Width.width_112}
          height={Height.height_3}
        />
      </View>
      <View style={[styles.frameWrapper, styles.frameLayout]}>
        <View style={styles.personalDetailsParent}>
          <View style={[styles.personalDetails, styles.profileHeaderLayout]}>
            <View style={[styles.profileHeader, styles.profileHeaderLayout]}>
              <Text style={[styles.perfilDoUsario, styles.trocarFotoTypo]}>
                Perfil do Usúario
              </Text>
            </View>
            <View style={styles.mariaJuarezDeFerrasParent}>
              <Text style={[styles.mariaJuarezDe, styles.mariaJuarezDeTypo]}>
                Maria Juarez de Ferras
              </Text>
              <View style={styles.histricoDePedidosWrapper}>
                <Pressable
                  onPress={() => navigation.navigate("FrameComponent111")}
                >
                  <Text
                    style={[styles.histricoDePedidos, styles.dadosPessoaisTypo]}
                  >
                    Histórico de Pedidos
                  </Text>
                </Pressable>
              </View>
            </View>
            <Text
              style={[styles.dadosPessoais, styles.dadosPessoaisTypo]}
            >{`Dados Pessoais `}</Text>
          </View>
          <View style={styles.photoContainerWrapper}>
            <View style={styles.photoContainer}>
              <Image
                style={styles.perf1Icon}
                contentFit="cover"
                source={require("../assets/perf-1.png")}
              />
              <View style={styles.trocarFotoWrapper}>
                <Text style={[styles.trocarFoto, styles.trocarFotoTypo]}>
                  Trocar Foto
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: Width.width_342,
    zIndex: 0,
  },
  profileHeaderLayout: {
    width: 201,
    zIndex: 0,
  },
  trocarFotoTypo: {
    textAlign: "left",
    fontStyle: "italic",
  },
  mariaJuarezDeTypo: {
    height: Height.height_20,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  dadosPessoaisTypo: {
    fontSize: FontSize.fs_16,
    textAlign: "left",
    fontStyle: "italic",
  },
  frameParent: {
    height: 231,
    gap: 21,
    zIndex: 0,
  },
  capturaDeTela2532026908Parent: {
    zIndex: 1,
    width: 181,
    height: 74,
  },
  capturaDeTela2532026908: {
    left: 0,
    top: 0,
    width: 177,
    position: "absolute",
    height: 74,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  frameChild: {
    top: 55,
    left: 69,
    width: Width.width_112,
    height: Height.height_3,
    zIndex: 1,
    color: Color.colorDeepskyblue100,
    position: "absolute",
  },
  frameWrapper: {
    paddingLeft: Padding.padding_22,
    flexDirection: "row",
    height: Height.height_136,
    zIndex: 0,
  },
  personalDetailsParent: {
    width: 320,
    alignItems: "flex-end",
    gap: Gap.gap_15,
    flexDirection: "row",
    height: Height.height_136,
    zIndex:0,
  },
  personalDetails: {
    gap: 23,
    height: Height.height_136,
  },
  profileHeader: {
    paddingLeft: Padding.padding_4,
    height: Height.height_28,
    flexDirection: "row",
  },
  perfilDoUsario: {
    width: 200,
    fontSize: FontSize.fs_24,
    color: Color.colorWhite,
    textAlign: "left",
    fontStyle: "italic",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: Height.height_28,
  },
  mariaJuarezDeFerrasParent: {
    width: 193,
    height: 42,
    gap: Gap.gap_3,
    zIndex: 0,
  },
  mariaJuarezDe: {
    width: 196,
    fontSize: 17,
    textAlign: "left",
    fontStyle: "italic",
    color: Color.colorWhite,
  },
  histricoDePedidosWrapper: {
    width: 163,
    paddingLeft: Padding.padding_11,
    height: Height.height_19,
    flexDirection: "row",
    zIndex: 0,
  },
  histricoDePedidos: {
    width: 155,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    height: Height.height_19,
    color: Color.colorDeepskyblue100,
  },
  dadosPessoais: {
    width: 129,
    color: Color.colorGray400,
    height: Height.height_20,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  photoContainerWrapper: {
    height: 124,
    justifyContent: "flex-end",
    paddingBottom: Padding.padding_4,
    width: Width.width_104,
    zIndex: 0,
  },
  photoContainer: {
    height: 120,
    gap: Gap.gap_1,
    width: Width.width_104,
    zIndex: 0,
  },
  perf1Icon: {
    height: 104,
    borderRadius: 50,
    width: Width.width_104,
  },
  trocarFotoWrapper: {
    width: 84,
    paddingLeft: Padding.padding_16,
    height: Height.height_15,
    flexDirection: "row",
    zIndex: 0,
  },
  trocarFoto: {
    width: 71,
    fontSize: FontSize.fs_12,
    height: Height.height_15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "italic",
    color: Color.colorDeepskyblue100,
  },
});

export default FrameComponent1;
