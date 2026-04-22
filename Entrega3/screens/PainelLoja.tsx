import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PainelLoja = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0E13" />

      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* CABEÇALHO TECHNAVEIA */}
        <View style={styles.header}>
          <View style={styles.logoGroup}>
            <View style={styles.hexagonContainer}>
              <MaterialCommunityIcons name="hexagon-outline" size={38} color="#00E6FF" />
              <Text style={styles.logoTinyText}>TN</Text>
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.headerTitle}>TECHNAVEIA</Text>
              <View style={styles.titleUnderline} />
            </View>
          </View>
        </View>

        {/* INFORMAÇÕES DO SERVIÇO */}
        <View style={styles.serviceInfoContainer}>
          <View style={styles.storeImageWrapper}>
            <Image 
              source={require("../assets/Ellipse-11.png")} 
              style={styles.storeImage} 
            />
          </View>
          
          <View style={styles.serviceDetails}>
            <Text style={styles.storeName}>Nova Core</Text>
            <Text style={styles.detailText}>Serviço: Formatação</Text>
            <Text style={styles.detailText}>Data 13-06-2026</Text>
            <Text style={styles.detailText}>Horário 17:00 p.m</Text>
            <Text style={styles.detailText}>Local Guará R.07 CS 32.</Text>
          </View>
        </View>

        {/* SESSÃO: CUPOM DE DESCONTO */}
        <View style={styles.couponContainer}>
          <TextInput
            style={styles.couponInput}
            placeholder="Cupom10Desconto"
            placeholderTextColor="#AAAAAA"
            editable={false}
          />
        </View>

        {/* SESSÃO: RESUMO DE VALORES */}
        <View style={styles.boxContainer}>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>SubTotal</Text>
            <Text style={styles.priceValue}>120,00</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Cupom</Text>
            <Text style={styles.priceValue}>10,00</Text>
          </View>
          <View style={[styles.priceRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>110,00</Text>
          </View>
        </View>

        {/* SESSÃO: FORMA DE PAGAMENTO */}
        <View style={[styles.boxContainer, styles.paymentContainer]}>
          <Text style={styles.paymentText}>Forma de Pagamento - Crédito 2X - 55,00</Text>
          <Text style={styles.paymentSubText}>Cartão Elo final 3570</Text>
          
          <TouchableOpacity 
            style={styles.changeButton} 
            onPress={() => navigation.navigate("Cartoes")}
          >
            <Text style={styles.changeButtonText}>TROCAR</Text>
          </TouchableOpacity>
        </View>

        {/* BOTÃO CONFIRMAR (NAVEGANDO PARA PERFIL) */}
        <TouchableOpacity 
          style={styles.confirmButton} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>

      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E13',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 30,
  },
  logoGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hexagonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logoTinyText: {
    position: 'absolute',
    color: '#00E6FF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  titleWrapper: {
    flex: 1,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: '700',
    fontFamily: FontFamily.interMedium,
  },
  titleUnderline: {
    height: 1,
    backgroundColor: '#00E6FF',
    marginTop: 2,
    width: '100%',
  },
  serviceInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  storeImageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    overflow: 'hidden',
  },
  storeImage: {
    width: '100%',
    height: '100%',
  },
  serviceDetails: {
    flex: 1,
  },
  storeName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: "italic",
  },
  detailText: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 2,
  },
  couponContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  couponInput: {
    backgroundColor: '#24272D',
    width: '100%',
    color: '#AAAAAA',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#333',
  },
  boxContainer: {
    backgroundColor: '#12161D',
    borderColor: '#00E6FF',
    borderWidth: 1.5,
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  priceLabel: { color: '#AAAAAA', fontSize: 15, fontStyle: 'italic' },
  priceValue: { color: '#AAAAAA', fontSize: 15 },
  totalRow: { marginTop: 5, borderTopWidth: 0.5, borderTopColor: '#333', paddingTop: 5 },
  totalLabel: { color: '#FFF', fontSize: 18, fontWeight: 'bold', fontStyle: 'italic' },
  totalValue: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  paymentContainer: { paddingBottom: 40 },
  paymentText: { color: '#AAAAAA', fontSize: 14, fontStyle: 'italic', marginBottom: 5 },
  paymentSubText: { color: '#AAAAAA', fontSize: 13, fontStyle: 'italic', textAlign: 'center' },
  changeButton: { position: 'absolute', bottom: 10, right: 15 },
  changeButtonText: { color: '#00E6FF', fontSize: 12, fontWeight: 'bold' },
  confirmButton: {
    backgroundColor: '#00E6FF',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PainelLoja;