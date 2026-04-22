import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Cores padronizadas do design
const COLORS = {
  background: '#0A0E13',
  primary: '#00E6FF', // Neon brilhante
  neonSubtle: '#46B6CF', // Neon suave
  darkGray: '#333945', // Fundo cards
  white: '#FFFFFF',
  gray: '#AAAAAA', // Labels e bullets
};

const ContCadastroServios4 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // Estado dos serviços selecionados
  const [selectedServices] = useState<string[]>([
    'Manutenção de Pc',
    'Troca de Peças',
    'Configur. Wi-Fi',
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <View style={styles.deviceFrame}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
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
            <View style={styles.pageTitleRow}>
              <Text style={styles.pageTitle}>Criar Conta - </Text>
              <View>
                <Text style={[styles.pageTitle, { color: COLORS.primary }]}>Serviços</Text>
                <View style={styles.titleUnderline} />
              </View>
            </View>
          </View>

          {/* DROPDOWN */}
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Selecionar Serviços Oferecidos:</Text>
            <TouchableOpacity style={styles.dropdownButton} activeOpacity={0.8}>
              <Text style={styles.dropdownText}>Manutenção de Pc</Text>
              <FontAwesome5 name="caret-down" size={20} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          {/* LISTA DE SERVIÇOS SELECIONADOS */}
          <View style={styles.selectedSection}>
            <Text style={styles.inputLabel}>Serviços Oferecidos Selecionados:</Text>
            <View style={styles.selectedBox}>
              {selectedServices.map((service, index) => (
                <View key={index} style={styles.bulletItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.bulletText}>{service}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* BOTÃO CONTINUAR -> VOLTA PARA LOGIN */}
          <TouchableOpacity 
            style={styles.continueButton} 
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.continueButtonText}>Confirmar</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  deviceFrame: { width: '100%', maxWidth: 450, flex: 1, alignSelf: 'center' },
  scrollContent: { paddingHorizontal: 25, paddingTop: 40, paddingBottom: 40 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  logoContainer: { marginRight: 12 },
  logoHex: {
    width: 42, height: 42, borderColor: COLORS.neonSubtle, borderWidth: 2,
    borderRadius: 8, justifyContent: 'center', alignItems: 'center', transform: [{ rotate: '45deg' }],
  },
  logoText: { color: COLORS.neonSubtle, fontWeight: 'bold', fontSize: 18, transform: [{ rotate: '-45deg' }] },
  titleContainer: { flex: 1, borderBottomWidth: 1, borderBottomColor: COLORS.neonSubtle, paddingBottom: 4 },
  headerTitle: { color: COLORS.white, fontSize: 22, fontWeight: 'bold', letterSpacing: 1.5 },
  pageTitleSection: { alignItems: 'center', marginBottom: 35 },
  pageTitleRow: { flexDirection: 'row', alignItems: 'center' },
  pageTitle: { color: COLORS.white, fontSize: 26, fontWeight: 'bold', fontStyle: 'italic' },
  titleUnderline: { height: 3, backgroundColor: COLORS.primary, width: '100%', marginTop: 2 },
  inputSection: { marginBottom: 25 },
  inputLabel: { color: COLORS.gray, fontSize: 14, fontStyle: 'italic', marginBottom: 10, fontWeight: 'bold' },
  dropdownButton: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: COLORS.darkGray, borderColor: COLORS.neonSubtle, borderWidth: 1.5,
    borderRadius: 15, paddingHorizontal: 20, height: 55,
  },
  dropdownText: { color: COLORS.white, fontSize: 18, fontStyle: 'italic', fontWeight: 'bold' },
  selectedSection: { marginBottom: 30 },
  selectedBox: {
    backgroundColor: COLORS.darkGray, borderColor: COLORS.neonSubtle, borderWidth: 1.5,
    borderRadius: 15, padding: 20, minHeight: 140,
  },
  bulletItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  bulletPoint: { width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.gray, marginRight: 12 },
  bulletText: { color: COLORS.white, fontSize: 18, fontStyle: 'italic' },
  continueButton: {
    backgroundColor: COLORS.primary, borderRadius: 15, height: 55,
    justifyContent: 'center', alignItems: 'center', marginTop: 20,
  },
  continueButtonText: { color: '#000', fontSize: 20, fontWeight: 'bold' },
});

export default ContCadastroServios4;