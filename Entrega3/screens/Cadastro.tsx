import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesome5, Feather } from '@expo/vector-icons';

const COLORS = {
  background: '#0A0E13',
  primary: '#00E6FF', 
  neonSubtle: '#46B6CF',
  darkGray: '#333945', 
  white: '#FFFFFF',
  gray: '#AAAAAA', 
};

type ProfileType = 'contratante' | 'tecnico';

const Cadastro = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [selectedProfile, setSelectedProfile] = useState<ProfileType>('contratante');

  // Função para lidar com o botão Continuar baseada na seleção
  const handleContinue = () => {
    if (selectedProfile === 'contratante') {
      navigation.navigate("ContCadastroUsuario");
    } else {
      navigation.navigate("ContCadastroServios2");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <View style={styles.deviceFrame}>
        
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

        {/* TÍTULO */}
        <View style={styles.pageTitleSection}>
          <Text style={styles.pageTitle}>Criar Conta</Text>
          <View style={styles.pageTitleUnderline} />
        </View>

        <Text style={styles.questionText}>Qual será o seu Perfil?</Text>

        {/* CARDS DE SELEÇÃO */}
        <View style={styles.cardsSection}>
          
          {/* Card: Quero Contratar */}
          <TouchableOpacity
            style={[styles.card, selectedProfile === 'contratante' && styles.cardSelected]}
            onPress={() => setSelectedProfile('contratante')}
            activeOpacity={0.8}
          >
            <View style={styles.cardIconContainer}>
              <Feather name="user" size={45} color={selectedProfile === 'contratante' ? COLORS.primary : COLORS.neonSubtle} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Quero Contratar</Text>
              <Text style={styles.cardDescription}>Busco técnicos para serviços</Text>
              {selectedProfile === 'contratante' && (
                <View style={styles.selectedIndicator}>
                  <Text style={styles.selectedText}>Selecionado</Text>
                  <FontAwesome5 name="check" size={12} color={COLORS.primary} style={{ marginLeft: 5 }} />
                </View>
              )}
            </View>
          </TouchableOpacity>

          {/* Card: Oferecer Serviços */}
          <TouchableOpacity
            style={[styles.card, selectedProfile === 'tecnico' && styles.cardSelected]}
            onPress={() => setSelectedProfile('tecnico')}
            activeOpacity={0.8}
          >
            <View style={styles.cardIconContainer}>
              <Feather name="clipboard" size={45} color={selectedProfile === 'tecnico' ? COLORS.primary : COLORS.neonSubtle} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Oferecer Serviços</Text>
              <Text style={styles.cardDescription}>Oferecer meus serviços técnicos</Text>
              {selectedProfile === 'tecnico' && (
                <View style={styles.selectedIndicator}>
                  <Text style={styles.selectedText}>Selecionado</Text>
                  <FontAwesome5 name="check" size={12} color={COLORS.primary} style={{ marginLeft: 5 }} />
                </View>
              )}
            </View>
          </TouchableOpacity>
        </View>

        {/* BOTÃO CONTINUAR DINÂMICO */}
        <TouchableOpacity 
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>

        {/* RODAPÉ */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>Já tem Conta?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLinkText}>Entrar</Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  deviceFrame: { 
    width: '100%', maxWidth: 450, flex: 1, 
    paddingHorizontal: 25, paddingTop: 40, alignSelf: 'center' 
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  logoContainer: { marginRight: 10 },
  logoHex: {
    width: 40, height: 40, borderColor: COLORS.neonSubtle,
    borderWidth: 2, borderRadius: 8, justifyContent: 'center',
    alignItems: 'center', transform: [{ rotate: '45deg' }],
  },
  logoText: { color: COLORS.neonSubtle, fontWeight: 'bold', fontSize: 16, transform: [{ rotate: '-45deg' }] },
  titleContainer: { flex: 1, borderBottomWidth: 1, borderBottomColor: COLORS.neonSubtle, paddingBottom: 4 },
  headerTitle: { color: COLORS.white, fontSize: 22, fontWeight: 'bold', letterSpacing: 2 },
  pageTitleSection: { alignItems: 'center', marginBottom: 30 },
  pageTitle: { color: COLORS.white, fontSize: 28, fontWeight: 'bold', fontStyle: 'italic' },
  pageTitleUnderline: { height: 3, backgroundColor: COLORS.primary, width: 100, marginTop: 5 },
  questionText: { color: COLORS.gray, fontSize: 16, fontStyle: 'italic', marginBottom: 20 },
  cardsSection: { flex: 1 },
  card: {
    flexDirection: 'row', backgroundColor: COLORS.darkGray,
    borderRadius: 20, padding: 20, marginBottom: 20,
    alignItems: 'center', borderWidth: 2, borderColor: 'transparent',
  },
  cardSelected: { borderColor: COLORS.primary },
  cardIconContainer: { marginRight: 20, width: 50, alignItems: 'center' },
  cardContent: { flex: 1 },
  cardTitle: { color: COLORS.white, fontSize: 20, fontWeight: 'bold', fontStyle: 'italic' },
  cardDescription: { color: COLORS.white, fontSize: 13, fontStyle: 'italic' },
  selectedIndicator: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', marginTop: 10 },
  selectedText: { color: COLORS.primary, fontSize: 12, fontWeight: 'bold' },
  continueButton: {
    backgroundColor: COLORS.primary, borderRadius: 15,
    height: 55, justifyContent: 'center', alignItems: 'center', marginBottom: 30,
  },
  continueButtonText: { color: '#000', fontSize: 20, fontWeight: 'bold' },
  footerSection: { flexDirection: 'row', justifyContent: 'center', marginBottom: 30 },
  footerText: { color: COLORS.gray, fontSize: 14, marginRight: 5 },
  loginLinkText: { color: COLORS.primary, fontSize: 14, fontWeight: 'bold', textDecorationLine: 'underline' },
});

export default Cadastro;