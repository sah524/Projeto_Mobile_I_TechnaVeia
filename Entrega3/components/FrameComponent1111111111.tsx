import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Supondo que você use as cores do seu padrão global
const COLORS = {
  primary: '#00E6FF', // Neon
  white: '#FFFFFF',
  gray: '#AAAAAA',
};

const FrameComponent1111111111 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.footerContainer}>
      
      {/* ... (Seus botões de GMAIL e MICROSOFT permanecem aqui) ... */}

      {/* TEXTO DE REGISTRO */}
      <View style={styles.registerWrapper}>
        <Text style={styles.noAccountText}>Não tem conta? </Text>
        <Pressable onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.registerLink}>Registrar</Text>
        </Pressable>
      </View>

      {/* ESQUECI A SENHA (O oficial que você manteve) */}
      <Pressable 
        style={styles.forgotPassword} 
        onPress={() => navigation.navigate("EsqueciASenha")}
      >
        <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  registerWrapper: {
    flexDirection: 'row',
    marginTop: 25,
    alignItems: 'center',
  },
  noAccountText: {
    color: COLORS.white,
    fontSize: 14,
  },
  registerLink: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: COLORS.gray,
    fontSize: 14,
    fontStyle: 'italic',
  }
});

export default FrameComponent1111111111;