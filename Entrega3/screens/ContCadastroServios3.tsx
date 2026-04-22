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

const ContCadastroServios3 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
  const [cep, setCep] = useState('');
  const [selectedRadius, setSelectedRadius] = useState('20km');
  const radiusOptions = ['5km', '10km', '20km', '25km'];
  const weekDays = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

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
              <Text style={styles.pageTitle}>Criar Conta - <Text style={{color: COLORS.primary}}>Serviços</Text></Text>
              <View style={styles.titleUnderline} />
            </View>
          </View>

          {/* FORMULÁRIO */}
          <View style={styles.formSection}>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Cep Base:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="70.000-020"
                  placeholderTextColor={COLORS.darkerGray}
                  value={cep}
                  onChangeText={setCep}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Região:</Text>
              <View style={[styles.inputContainer, styles.disabledInput]}>
                <Text style={styles.inputText}>Asa Norte</Text>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Raio de Cobertura:</Text>
              <View style={styles.radiusContainer}>
                {radiusOptions.map((item) => (
                  <TouchableOpacity 
                    key={item} 
                    style={[styles.radiusBox, selectedRadius === item && styles.activeBox]}
                    onPress={() => setSelectedRadius(item)}
                  >
                    <Text style={[styles.radiusText, selectedRadius === item && { color: '#000' }]}>
                      {item.replace('km', '\nkm')}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Dias Disponíveis:</Text>
              <View style={styles.daysContainer}>
                {weekDays.map((day, index) => (
                  <View key={index} style={styles.dayColumn}>
                    <Text style={styles.dayLabel}>{day}</Text>
                    <TouchableOpacity 
                      style={[styles.checkSquare, index < 5 && styles.activeCheck]} 
                      activeOpacity={0.7}
                    />
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Horário:</Text>
              <View style={[styles.inputContainer, styles.disabledInput]}>
                <Text style={styles.inputText}>08:00 às 18:00</Text>
              </View>
            </View>
          </View>

          {/* BOTÃO CONTINUAR -> VAI PARA ETAPA 4 */}
          <TouchableOpacity 
            style={styles.continueButton} 
            activeOpacity={0.8}
            onPress={() => navigation.navigate("ContCadastroServios4")}
          >
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, alignItems: 'center' },
  deviceFrame: { width: '100%', maxWidth: 450, flex: 1 },
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
  pageTitleSection: { alignItems: 'center', marginBottom: 25 },
  pageTitle: { color: COLORS.white, fontSize: 26, fontWeight: 'bold', fontStyle: 'italic' },
  titleUnderline: { height: 3, backgroundColor: COLORS.primary, width: '100%', marginTop: 2 },
  formSection: { marginBottom: 20 },
  inputGroup: { marginBottom: 18 },
  inputLabel: { color: COLORS.gray, fontSize: 15, fontStyle: 'italic', marginBottom: 8, fontWeight: 'bold' },
  inputContainer: { backgroundColor: COLORS.darkGray, borderColor: COLORS.primary, borderWidth: 1.5, borderRadius: 12, paddingHorizontal: 15, height: 52, justifyContent: 'center' },
  input: { color: COLORS.white, fontSize: 16, height: '100%' },
  disabledInput: { opacity: 0.7 },
  inputText: { color: COLORS.white, fontSize: 16 },
  radiusContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  radiusBox: { 
    width: 65, height: 65, backgroundColor: COLORS.darkGray, borderWidth: 1.5, 
    borderColor: COLORS.primary, borderRadius: 15, justifyContent: 'center', alignItems: 'center' 
  },
  activeBox: { backgroundColor: COLORS.primary },
  radiusText: { color: COLORS.white, textAlign: 'center', fontWeight: 'bold', fontSize: 14 },
  daysContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 },
  dayColumn: { alignItems: 'center', gap: 8 },
  dayLabel: { color: COLORS.white, fontWeight: 'bold' },
  checkSquare: { 
    width: 24, height: 24, backgroundColor: COLORS.darkGray, borderRadius: 6, 
    borderWidth: 1.5, borderColor: COLORS.primary 
  },
  activeCheck: { backgroundColor: COLORS.primary },
  continueButton: {
    backgroundColor: COLORS.primary, borderRadius: 15, height: 55,
    justifyContent: 'center', alignItems: 'center', marginTop: 10,
  },
  continueButtonText: { color: '#000', fontSize: 20, fontWeight: 'bold' },
});

export default ContCadastroServios3;