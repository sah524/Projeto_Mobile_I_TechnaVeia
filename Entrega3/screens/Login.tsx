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

// Componentes internos
import LoginForm from "../components/LoginForm";
import FrameComponent1111111111 from "../components/FrameComponent1111111111";

const COLORS = {
  background: '#0A0E13',
  primary: '#00E6FF', 
  neonSubtle: '#46B6CF',
  white: '#FFFFFF',
};

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.loginScrollViewContent}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={50}
      >
        <View style={styles.deviceFrame}>
          
          {/* Cabeçalho TECHNAVEIA */}
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

          {/* Container do Formulário */}
          <View style={styles.formContainer}>
            <LoginForm />
          </View>

          {/* Botão Entrar */}
          <View style={styles.buttonWrapper}>
            <Pressable
              style={styles.loginButton}
              onPress={() => navigation.navigate("Inicial")}
            >
              <Text style={styles.loginButtonText}>Entrar</Text>
            </Pressable>
          </View>

          {/* Rodapé oficial */}
          <View style={styles.footerContainer}>
            <FrameComponent1111111111 />
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
  loginScrollViewContent: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  deviceFrame: {
    width: '100%',
    // AJUSTE: Aumentado para 450 para que os inputs de e-mail e senha possam esticar mais
    maxWidth: 450, 
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // AJUSTE: Aumentado para 45 para afastar o "Bem-vindo" do nome TECHNAVEIA
    marginBottom: 45, 
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
    borderBottomWidth: 1,
    borderBottomColor: COLORS.neonSubtle,
    paddingBottom: 5,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1.5, 
  },
  headerLine: {},
  formContainer: {
    width: '100%',
    marginBottom: 10,
  },
  buttonWrapper: {
    width: '100%',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  loginButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footerContainer: {
    width: '100%',
    marginTop: 20,
    minHeight: 150, 
  }
});

export default Login;