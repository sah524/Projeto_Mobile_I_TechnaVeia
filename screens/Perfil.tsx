import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { FontAwesome5, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import OrderStatusOptions from "../components/OrderStatusOptions";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

// Cores do Design Neon
const COLORS = {
  background: '#0A0E13',
  primary: '#00E6FF',
  white: '#FFFFFF',
  gray: '#AAAAAA',
  inputBackground: '#12161D',
  darkCyan: '#008B8B',
};

const userData = [
  { id: '1', value: 'Guará R.07 CS 32.' },
  { id: '2', value: 'MariaJfs@gmail.com', underline: true },
  { id: '3', value: '999.999.999-99' },
  { id: '4', value: '(99) 99999-9999' },
  { id: '5', value: '17 de Março de 1985' },
];

const Perfil = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* CABEÇALHO TECHNAVEIA */}
        <View style={styles.header}>
          <View style={styles.logoGroup}>
            <View style={styles.hexagonContainer}>
              <MaterialCommunityIcons name="hexagon-outline" size={38} color={COLORS.primary} />
              <Text style={styles.logoTinyText}>TN</Text>
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.headerTitle}>TECHNAVEIA</Text>
              <View style={styles.titleUnderline} />
            </View>
          </View>
        </View>

        {/* INFO DO PERFIL (FOTO + NOME) */}
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <Text style={styles.pageTitle}>Perfil do Usuário</Text>
            <Text style={styles.userName}>Maria Juarez de Ferras</Text>
            <TouchableOpacity onPress={() => {/* Scroll para histórico ou navegação */}}>
              <Text style={styles.historyLink}>Histórico de Pedidos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.avatarContainer}>
            <View style={styles.avatarCircle}>
              <FontAwesome5 name="user-alt" size={40} color={COLORS.white} />
            </View>
            <TouchableOpacity>
              <Text style={styles.changePhotoText}>Trocar Foto</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* STATUS DOS PEDIDOS (DO CÓDIGO 1) */}
        <View style={styles.statusSection}>
           <OrderStatusOptions />
        </View>

        {/* DADOS PESSOAIS (ESTILO NEON) */}
        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        <View style={styles.dataContainer}>
          {userData.map((item) => (
            <View key={item.id} style={styles.dataBox}>
              <Text style={[
                styles.dataText, 
                item.underline && styles.dataTextUnderline
              ]}>
                {item.value}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* NAV BAR INFERIOR */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Inicial")}>
          <Feather name="home" size={28} color={COLORS.gray} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Mensagens")}>
          <Feather name="mail" size={28} color={COLORS.gray} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cartoes")}>
          <Feather name="credit-card" size={28} color={COLORS.gray} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100, // Espaço para não cobrir a navbar
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
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  titleWrapper: {
    flex: 1,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: '700',
    fontFamily: FontFamily.interBold,
  },
  titleUnderline: {
    height: 1,
    backgroundColor: COLORS.primary,
    marginTop: 2,
    width: '100%',
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  profileInfo: {
    flex: 1,
  },
  pageTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: FontFamily.interBold,
  },
  userName: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  historyLink: {
    color: COLORS.darkCyan,
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  changePhotoText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  statusSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: COLORS.gray,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 15,
  },
  dataContainer: {
    marginBottom: 20,
  },
  dataBox: {
    backgroundColor: COLORS.inputBackground,
    borderColor: COLORS.primary,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    marginBottom: 12,
  },
  dataText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dataTextUnderline: {
    textDecorationLine: 'underline',
  },
  editButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  editButtonText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#222',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Perfil;