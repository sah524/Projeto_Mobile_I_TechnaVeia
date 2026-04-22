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

const RedefenirSenha = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

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
          
          {/* HEADER: LOGO + TÍTULO */}
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
            <Text style={styles.pageTitle}>Redefenir Senha:</Text>
            <Text style={styles.pageSubtitle}>Cadastrar nova Senha</Text>
          </View>

          {/* FORMULÁRIO DE SENHA */}
          <View style={styles.formSection}>
            
            {/* Campo Senha */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Senha:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="********"
                  placeholderTextColor={COLORS.darkerGray}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Campo Confirmação de Senha */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Confirmação de Senha:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="********"
                  placeholderTextColor={COLORS.darkerGray}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={true}
                  autoCapitalize="none"
                />
              </View>
              {/* Dica de Segurança */}
              <Text style={styles.helperText}>
                A senha deve conter 8 dígitos, letra maiúscula e minúscula.
              </Text>
            </View>

          </View>

          {/* BOTÃO CONFIRMAR (RETORNA AO LOGIN) */}
          <View style={styles.buttonWrapper}>
            <Pressable
              style={({ pressed }) => [
                styles.confirmButton,
                { opacity: pressed ? 0.8 : 1 }
              ]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.confirmButtonText}>Confirmar</Text>
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
    paddingVertical: 40,
  },
  deviceFrame: {
    width: '100%',
    maxWidth: 450,
    paddingHorizontal: 25,
  },
  // --- HEADER ---
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
  // --- TEXTOS ---
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
  // --- FORMULÁRIO ---
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
    lineHeight: 18,
  },
  // --- BOTÃO ---
  buttonWrapper: {
    width: '100%',
  },
  confirmButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  confirmButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RedefenirSenha;