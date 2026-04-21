import * as React from "react";
import { 
  Text, 
  StyleSheet, 
  View, 
  Pressable, 
  SafeAreaView, 
  StatusBar,
  TextInput 
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Paleta de Cores TECHNAVEIA
const COLORS = {
  background: '#0A0E13',
  primary: '#00E6FF', 
  neonSubtle: '#46B6CF',
  darkGray: '#1C222B',
  white: '#FFFFFF',
  gray: '#AAAAAA',
  darkerGray: '#666666',
};

const EsqueciASenha = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [email, setEmail] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={50}
      >
        <View style={styles.deviceFrame}>
          
          {/* CABEÇALHO: LOGO + TÍTULO */}
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

          {/* SEÇÃO DE TEXTO */}
          <View style={styles.textSection}>
            <Text style={styles.pageTitle}>Esqueceu a Senha?</Text>
            <Text style={styles.pageSubtitle}>Redefina a senha em duas etapas.</Text>
          </View>

          {/* FORMULÁRIO DE INPUT */}
          <View style={styles.formSection}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Digite seu E-mail cadastrado:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="exemplo@email.com"
                  placeholderTextColor={COLORS.darkerGray}
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>
              <Text style={styles.helperText}>
                Enviaremos um código de verificação para o seu e-mail.
              </Text>
            </View>
          </View>

          {/* BOTÃO DE AÇÃO */}
          <View style={styles.buttonWrapper}>
            <Pressable
              style={({ pressed }) => [
                styles.continueButton,
                { opacity: pressed ? 0.8 : 1 }
              ]}
              onPress={() => navigation.navigate("ConfirmarEmail")}
            >
              <Text style={styles.continueButtonText}>Continuar</Text>
            </Pressable>
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
    paddingVertical: 50,
  },
  deviceFrame: {
    width: '100%',
    maxWidth: 450,
    paddingHorizontal: 25,
  },
  // --- ESTILIZAÇÃO DO LOGO E HEADER ---
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
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  // --- TEXTOS DA PÁGINA ---
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
  // --- INPUTS ---
  formSection: {
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    color: COLORS.gray,
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 10,
    fontWeight: '500',
  },
  inputContainer: {
    backgroundColor: COLORS.darkGray,
    borderColor: COLORS.neonSubtle,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  input: {
    color: COLORS.white,
    fontSize: 16,
    height: 55,
  },
  helperText: {
    color: COLORS.darkerGray,
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 10,
    marginLeft: 4,
  },
  // --- BOTÃO ---
  buttonWrapper: {
    width: '100%',
  },
  continueButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    // Efeito de brilho neon
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  continueButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default EsqueciASenha;