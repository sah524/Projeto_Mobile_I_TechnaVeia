import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const COLORS = {
  background: '#0A0E13',
  primary: '#00E6FF', 
  neonSubtle: '#46B6CF', 
  darkGray: '#333945', 
  white: '#FFFFFF',
  gray: '#AAAAAA', 
  darkerGray: '#666666', 
};

const ContCadastroUsuario = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <KeyboardAvoidingView 
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.deviceFrame}>
          <ScrollView 
            contentContainerStyle={styles.scrollContent} 
            showsVerticalScrollIndicator={false}
          >
            
            {/* CABEÇALHO */}
            <View style={styles.header}>
              <View style={styles.logoContainer}>
                <View style={styles.logoHex}>
                  <Text style={styles.logoText}>TN</Text>
                </View>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.headerTitle}>TECHNAVEIA</Text>
              </View>
            </View>

            {/* TÍTULO DA PÁGINA */}
            <View style={styles.pageTitleSection}>
              <View>
                <Text style={styles.pageTitle}>Criar Conta</Text>
                <View style={styles.titleUnderline} />
              </View>
            </View>

            {/* FORMULÁRIO */}
            <View style={styles.formSection}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Nome Completo:</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholderTextColor={COLORS.darkerGray}
                    autoCapitalize="words"
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>E-mail:</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Telefone (Whatsapp):</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={telefone}
                    onChangeText={setTelefone}
                    keyboardType="phone-pad"
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Senha:</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Confirmação de Senha:</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                    secureTextEntry
                  />
                </View>
                <Text style={styles.helperText}>
                  A senha deve conter 8 dígitos, letra maiúscula e minúscula.
                </Text>
              </View>
            </View>

            {/* BOTÃO ENTRAR (Vai para o Login) */}
            <TouchableOpacity 
              style={styles.submitButton} 
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.submitButtonText}>Entrar</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  deviceFrame: { width: '100%', maxWidth: 450, flex: 1, alignSelf: 'center' },
  scrollContent: { flexGrow: 1, paddingHorizontal: 25, paddingTop: 40, paddingBottom: 40 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  logoContainer: { marginRight: 12 },
  logoHex: {
    width: 42, height: 42, borderColor: COLORS.neonSubtle, borderWidth: 2,
    borderRadius: 8, justifyContent: 'center', alignItems: 'center', transform: [{ rotate: '45deg' }],
  },
  logoText: { color: COLORS.neonSubtle, fontWeight: 'bold', fontSize: 18, transform: [{ rotate: '-45deg' }] },
  titleContainer: { flex: 1, borderBottomWidth: 1, borderBottomColor: COLORS.neonSubtle, paddingBottom: 4 },
  headerTitle: { color: COLORS.white, fontSize: 22, fontWeight: 'bold', letterSpacing: 1.5 },
  pageTitleSection: { alignItems: 'center', marginBottom: 25 },
  pageTitle: { color: COLORS.white, fontSize: 26, fontWeight: 'bold', fontStyle: 'italic' },
  titleUnderline: { height: 3, backgroundColor: COLORS.primary, width: '100%', marginTop: 2 },
  formSection: { marginBottom: 20 },
  inputGroup: { marginBottom: 18 },
  inputLabel: { color: COLORS.gray, fontSize: 15, fontStyle: 'italic', marginBottom: 8, fontWeight: 'bold' },
  inputContainer: { backgroundColor: COLORS.darkGray, borderColor: COLORS.primary, borderWidth: 1.5, borderRadius: 12, paddingHorizontal: 15 },
  input: { color: COLORS.white, fontSize: 16, height: 52 },
  helperText: { color: COLORS.darkerGray, fontSize: 11, fontStyle: 'italic', marginTop: 8 },
  submitButton: {
    backgroundColor: COLORS.primary, borderRadius: 15, height: 55,
    justifyContent: 'center', alignItems: 'center', marginTop: 10,
  },
  submitButtonText: { color: '#000', fontSize: 20, fontWeight: 'bold' },
});

export default ContCadastroUsuario;