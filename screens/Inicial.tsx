import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const DATA = [
  { id: '1', name: 'NovaCore', rating: 5, price: 120.0, icon: 'cpu' },
  { id: '2', name: 'Synapse', rating: 4, price: 124.0, icon: 'share-2' },
  { id: '3', name: 'HatNet', rating: 5, price: 137.0, icon: 'shield' },
  { id: '4', name: 'ZenTH', rating: 4, price: 120.0, icon: 'zap' },
  { id: '5', name: 'Arga Dinamic', rating: 4, price: 125.0, icon: 'database' },
];

const Inicial = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => {
        console.log("Tentando navegar para PainelLoja");
        navigation.navigate("PainelLoja"); 
      }}
    >
      <View style={styles.logoCircle}>
         <Feather name={item.icon} size={24} color="#00E6FF" />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <View style={styles.starsRow}>
          {[1, 2, 3, 4, 5].map((s) => (
            <FontAwesome key={s} name={s <= item.rating ? "star" : "star-o"} size={12} color="#E0E0E0" style={{marginRight: 2}} />
          ))}
        </View>
        <View style={styles.priceRow}>
          <View style={styles.greenDot} />
          <Text style={styles.cardPrice}>R$ {item.price.toFixed(2).replace('.', ',')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <MaterialCommunityIcons name="hexagon-outline" size={38} color="#00E6FF" />
          <View style={{flex: 1}}>
            <Text style={styles.headerTitle}>TECHNAVEIA</Text>
            <View style={styles.blueLine} />
          </View>
        </View>
        <View style={styles.locationRow}>
          <Feather name="map-pin" size={14} color="#00E6FF" />
          <Text style={styles.locationText}>Guará • Atendimento hoje</Text>
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.greetingText}>Olá, Usuário.</Text>
            <Text style={styles.questionText}>O que você precisa resolver hoje?</Text>
            <View style={styles.filterBar}>
               <View>
                 <Text style={styles.activeTab}>FORMATAÇÃO</Text>
                 <View style={styles.activeUnderline} />
               </View>
               <Feather name="search" size={20} color="#FFF" />
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* MENU INFERIOR FIXO NO RODAPÉ */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Inicial")} style={styles.navIcon}>
          <Feather name="home" size={26} color="#00E6FF" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Mensagens")} style={styles.navIcon}>
          <Feather name="mail" size={26} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cartoes")} style={styles.navIcon}>
          <Feather name="credit-card" size={26} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Perfil")} style={styles.navIcon}>
          <Feather name="user" size={26} color="#999" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { padding: 20, paddingTop: 10 },
  logoRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  headerTitle: { color: '#FFF', fontSize: 18, letterSpacing: 2, fontWeight: '700' },
  blueLine: { height: 1, backgroundColor: '#00E6FF', marginTop: 2 },
  locationRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
  locationText: { color: '#999', fontSize: 12, marginLeft: 5, fontStyle: 'italic' },
  greetingText: { color: '#999', fontSize: 13, fontStyle: 'italic', marginTop: 15 },
  questionText: { color: '#FFF', fontSize: 15, textAlign: 'center', fontWeight: '600', marginTop: 5 },
  filterBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 10 },
  activeTab: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  activeUnderline: { height: 3, backgroundColor: '#00E6FF', width: '100%', marginTop: 2 },
  card: { flexDirection: 'row', backgroundColor: '#000', borderWidth: 1.5, borderColor: '#00E6FF', borderRadius: 15, padding: 12, marginBottom: 15, marginHorizontal: 20, alignItems: 'center' },
  logoCircle: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#1A1F26', justifyContent: 'center', alignItems: 'center' },
  cardContent: { marginLeft: 15, flex: 1 },
  cardTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold', fontStyle: 'italic' },
  starsRow: { flexDirection: 'row', marginVertical: 3 },
  priceRow: { flexDirection: 'row', alignItems: 'center' },
  greenDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#00FF00', marginRight: 8 },
  cardPrice: { color: '#00FF00', fontSize: 16, fontWeight: 'bold' },
  bottomNav: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor: '#000', 
    borderTopWidth: 1, 
    borderTopColor: '#222', 
    paddingVertical: 15, 
    position: 'absolute', 
    bottom: 0, 
    width: '100%' 
  },
  navIcon: { padding: 5 }
});

export default Inicial;