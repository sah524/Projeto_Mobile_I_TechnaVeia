import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import FrameComponent11111121 from "./FrameComponent11111121";
import FrameComponent111111121 from "./FrameComponent111111121";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  Height,
  FontSize,
  Width,
  Padding,
  Gap,
} from "../GlobalStyles";

const LoginForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loginForm}>
      {/* MENSAGEM DE BOAS-VINDAS */}
      <View style={[styles.welcomeMessageParent, styles.welcomeMessageParentLayout]}>
        <View style={styles.welcomeMessage}>
          <Text style={styles.bemTypo}>Bem-Vindo(a)</Text>
        </View>
        <View style={[styles.loginInstructionsWrapper, styles.welcomeMessageParentLayout]}>
          <View style={[styles.loginInstructions, styles.rememberDetailsFlexBox]}>
            <Text style={styles.faaTypo}>Faça Loguin Para se conectar</Text>
          </View>
        </View>
      </View>

      {/* INPUTS DE E-MAIL E SENHA */}
      {/* Eles agora ocuparão a largura total definida no loginForm */}
      <FrameComponent11111121 />
      <FrameComponent111111121 />

      {/* RODAPÉ DO FORMULÁRIO (APENAS LEMBRAR) */}
      <View style={[styles.checkboxContainerWrapper, styles.checkboxContainerLayout]}>
        <View style={[styles.checkboxContainer, styles.checkboxContainerLayout]}>
          <View style={[styles.rememberDetails, styles.rememberDetailsFlexBox]}>
            <View style={styles.rememberCheckbox} />
            <View style={styles.rememberLabel}>
              <Text style={styles.lembrarTypo}>Lembrar</Text>
            </View>
          </View>
          
          {/* O BLOCO "ESQUECI MINHA SENHA" EM AZUL FOI REMOVIDO DAQUI */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginForm: {
    // AJUSTE: Aumentado de 332 para 380 para os campos esticarem para os lados
    width: 380, 
    height: 331,
    paddingBottom: Padding.padding_30,
    gap: 33,
    zIndex: 0,
    alignSelf: 'center',
  },
  welcomeMessageParentLayout: {
    width: 300,
    zIndex: 0,
  },
  bemTypo: {
    textAlign: "left",
    color: Color.colorGray400,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: 25,
    width: 250,
    height: Height.height_30,
  },
  rememberDetailsFlexBox: {
    zIndex: 1,
    flexDirection: "row",
  },
  faaTypo: {
    color: Color.colorGray300,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.fs_15,
    width: Width.width_220,
    height: Height.height_19,
    textAlign: "left",
    fontStyle: "italic",
  },
  checkboxContainerLayout: {
    height: Height.height_13,
    zIndex: 0,
  },
  lembrarTypo: {
    width: 60,
    fontSize: FontSize.fs_10,
    height: Height.height_12,
    color: Color.colorGray300,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "italic",
  },
  welcomeMessageParent: {
    height: 49,
    marginBottom: 10,
  },
  welcomeMessage: {
    width: 200,
    zIndex: 2,
    flexDirection: "row",
    height: Height.height_30,
  },
  loginInstructionsWrapper: {
    paddingLeft: Padding.padding_15,
    height: Height.height_19,
    flexDirection: "row",
    marginTop: 5,
  },
  loginInstructions: {
    width: 217,
    height: Height.height_19,
  },
  checkboxContainerWrapper: {
    width: '100%',
    paddingLeft: Padding.padding_20,
    flexDirection: "row",
  },
  checkboxContainer: {
    width: '100%',
    flexDirection: "row",
  },
  rememberDetails: {
    width: 80,
    alignItems: "center",
    gap: Gap.gap_8,
    height: Height.height_12,
  },
  rememberCheckbox: {
    height: 12,
    width: 12,
    backgroundColor: Color.colorDeepskyblue,
    zIndex: 1,
  },
  rememberLabel: {
    width: 60,
    height: Height.height_12,
  },
});

export default LoginForm;