import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontFamily } from "../GlobalStyles";

const COLORS = {
  background: '#0A0E13',
  primary: '#00E6FF',
  white: '#FFFFFF',
  gray: '#AAAAAA',
  inputBackground: '#12161D',
};

const mockMessages = [
  { id: '1', sender: 'NovaCore', snippet: 'Mensagem de Texto recebida', avatarUrl: 'https://ui-avatars.com/api/?name=NC&background=FFFFFF&color=00E6FF&rounded=true&bold=true' },
  { id: '2', sender: 'NovaCore', snippet: 'Mensagem de Texto recebida', avatarUrl: 'https://ui-avatars.com/api/?name=NC&background=FFFFFF&color=00E6FF&rounded=true&bold=true' },
  { id: '3', sender: 'NovaCore', snippet: 'Mensagem de Texto recebida', avatarUrl: 'https://ui-avatars.com/api/?name=NC&background=FFFFFF&color=00E6FF&rounded=true&bold=true' },
];

const Mensagens = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* HEADER ÚNICO */}
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

        <View style={styles.titleRow}>
          <Text style={styles.pageTitle}>Mensagens</Text>
          <TouchableOpacity style={styles.sortButton}>
            <Text style={styles.sortButtonText}>Ordenar por</Text>
            <Feather name="chevron-down" size={14} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* LISTA DE MENSAGENS (APENAS UMA VEZ) */}
        {mockMessages.map((msg) => (
          <TouchableOpacity key={msg.id} style={styles.messageCard}>
            <Image source={{ uri: msg.avatarUrl }} style={styles.avatar} />
            <View style={styles.messageContent}>
              <Text style={styles.messageSender}>{msg.sender}</Text>
              <Text style={styles.messageSnippet}>{msg.snippet}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton}>
              <FontAwesome5 name="trash" size={18} color={COLORS.white} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* NAV BAR */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}><Feather name="home" size={26} color={COLORS.gray} /></TouchableOpacity>
        <TouchableOpacity><Feather name="mail" size={26} color={COLORS.primary} /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cartoes")}><Feather name="credit-card" size={26} color={COLORS.gray} /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}><Feather name="user" size={26} color={COLORS.gray} /></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// ... estilos simplificados para evitar erro de duplicação
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scrollContent: { padding: 20, paddingBottom: 100 },
  header: { marginBottom: 30 },
  logoGroup: { flexDirection: 'row', alignItems: 'center' },
  hexagonContainer: { justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  logoTinyText: { position: 'absolute', color: COLORS.primary, fontSize: 10, fontWeight: 'bold' },
  titleWrapper: { flex: 1 },
  headerTitle: { color: COLORS.white, fontSize: 20, fontWeight: '700', letterSpacing: 2 },
  titleUnderline: { height: 1, backgroundColor: COLORS.primary, marginTop: 2 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  pageTitle: { color: COLORS.white, fontSize: 26, fontWeight: 'bold', fontStyle: 'italic' },
  sortButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1A1D24', padding: 8, borderRadius: 12 },
  sortButtonText: { color: COLORS.white, fontSize: 12 },
  messageCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.inputBackground, borderColor: COLORS.primary, borderWidth: 1.5, borderRadius: 12, padding: 12, marginBottom: 15 },
  avatar: { width: 45, height: 45, borderRadius: 22.5, marginRight: 12 },
  messageContent: { flex: 1 },
  messageSender: { color: COLORS.white, fontSize: 16, fontWeight: 'bold', fontStyle: 'italic' },
  messageSnippet: { color: COLORS.gray, fontSize: 13 },
  deleteButton: { padding: 8 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 15, borderTopWidth: 1, borderTopColor: '#222', backgroundColor: COLORS.background, position: 'absolute', bottom: 0, width: '100%' }
});

export default Mensagens;