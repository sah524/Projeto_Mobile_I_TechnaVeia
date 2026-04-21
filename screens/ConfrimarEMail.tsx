import * as React from "react";
import { 
  Text, 
  StyleSheet, 
  View, 
  Pressable, 
  SafeAreaView, 
  StatusBar 
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import FrameComponent from "../components/FrameComponent";

// Paleta de Cores TECHNAVEIA (Design Neon)
const COLORS = {
  background: '#0A0E13',
  primary: '#00E6FF', 
  neonSubtle: '#46B6CF',
  darkGray: '#1C222B',
  white: '#FFFFFF',
  gray: '#AAAAAA',
};

const ConfrimarEMail = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.deviceFrame}>
          
          {/* HEADER TECHNAVEIA */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <View style={styles.logoHex}>
                <Text style={styles.logoText}>TN</Text>
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.headerTitle}>TECHNAVEIA</Text>
              <View style={styles.headerLine} />
            </View>
          </View>

          {/* TÍTULOS DA PÁGINA */}
          <View style={styles.textSection}>
            <Text style={styles.pageTitle}>Confirmar E-mail.</Text>
            <Text style={styles.pageSubtitle}>Enviamos um código para o seu e-mail</Text>
          </View>

          {/* SEÇÃO DO CÓDIGO (Componente FrameComponent) */}
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Digite o código:</Text>
            <FrameComponent />
          </View>

          {/* BOTÃO CONFIRMAR (DESTINO ATUALIZADO: RedefenirSenha) */}
          <View style={styles.buttonWrapper}>
            <Pressable
              style={({ pressed }) => [
                styles.confirmButton,
                { opacity: pressed ? 0.8 : 1 }
              ]}
              onPress={() => navigation.navigate("RedefenirSenha")}
            >
              <Text style={styles.confirmButtonText}>Confirmar</Text>
            </Pressable>
          </View>

          {/* RODAPÉ INFORMATIVO */}
          <View style={styles.footerSection}>
            <Text style={styles.footerText}>
              Dica: Caso não encontre o e-mail na sua caixa de entrada, verifique a pasta Spam!
            </Text>
          </View>
          
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  deviceFrame: {
    width: '100%',
    maxWidth: 450,
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  logoContainer: {
    marginRight: 12,
  },
  logoHex: {
    width: 45,
    height: 45,
    borderColor: COLORS.neonSubtle,
    borderWidth: 2,
    borderRadius: 8, 
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '45deg' }], 
  },
  logoText: {
    color: COLORS.neonSubtle,
    fontWeight: 'bold',
    fontSize: 20,
    transform: [{ rotate: '-45deg' }], 
  },
  titleContainer: {
    flex: 1,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1.5, 
  },
  headerLine: {
    height: 2,
    backgroundColor: COLORS.primary,
    marginTop: 4,
    width: '100%',
  },
  textSection: {
    marginBottom: 35,
  },
  pageTitle: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  pageSubtitle: {
    color: COLORS.gray,
    fontSize: 16,
    fontStyle: 'italic',
  },
  inputSection: {
    marginBottom: 40,
  },
  inputLabel: {
    color: COLORS.gray,
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 30,
  },
  confirmButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  confirmButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footerSection: {
    marginTop: 10,
  },
  footerText: {
    color: COLORS.gray,
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'left',
    lineHeight: 22,
  },
});

export default ConfrimarEMail;