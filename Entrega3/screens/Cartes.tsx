import * as React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Color, FontFamily } from "../GlobalStyles";

interface PaymentMethod {
  id: string;
  title: string;
  subtitle: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}

const PAYMENT_METHODS: PaymentMethod[] = [
  { id: '1', title: 'Crédito - Elo', subtitle: '0300 **** **** 4758', iconName: 'credit-card' },
  { id: '2', title: 'Débito - Elo', subtitle: '0300 **** **** 4758', iconName: 'credit-card-outline' },
  { id: '3', title: 'Crédito - Visa', subtitle: '8457 **** **** 5487', iconName: 'credit-card' },
  { id: '4', title: 'PIX', subtitle: 'Transferência Instantânea', iconName: 'qrcode' },
  { id: '5', title: 'Apple Pay', subtitle: 'Carteira Digital Vinculada', iconName: 'apple' },
  { id: '6', title: 'Google Pay', subtitle: 'Carteira Digital Vinculada', iconName: 'google' },
  { id: '7', title: 'Boleto Bancário', subtitle: 'Geração Automática', iconName: 'barcode' },
];

const Cartes = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const renderPaymentItem = ({ item }: { item: PaymentMethod }) => (
    <View style={styles.cardContainer}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name={item.iconName} size={28} color="#FFF" />
      </View>
      
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      </View>

      <TouchableOpacity style={styles.deleteButton} activeOpacity={0.7}>
        <MaterialCommunityIcons name="trash-can-outline" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0c" />
      
      {/* CABEÇALHO COM BOTÃO VOLTAR */}
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          {/* BOTÃO DE VOLTAR ADICIONADO AQUI */}
          <TouchableOpacity 
            onPress={() => navigation.navigate("PainelLoja")} 
            style={styles.backButton}
          >
            <Feather name="chevron-left" size={32} color="#00d2ff" />
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <View style={styles.logoHexagon}>
              <Text style={styles.logoText}>TN</Text>
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.headerTitle}>TECHNAVEIA</Text>
              <View style={styles.headerUnderline} />
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.pageTitle}>Formas de Pagamento</Text>

      <FlatList
        data={PAYMENT_METHODS}
        keyExtractor={(item) => item.id}
        renderItem={renderPaymentItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Inicial")}>
          <Feather name="home" size={28} color="#666" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Mensagens")}>
          <Feather name="mail" size={28} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cartoes")}>
          <MaterialCommunityIcons name="credit-card-outline" size={32} color="#00d2ff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <Feather name="user" size={28} color="#666" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0c',
  },
  header: {
    paddingHorizontal: 15,
    paddingTop: 20,
    marginBottom: 20,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
    padding: 5,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logoHexagon: {
    width: 35,
    height: 35,
    borderWidth: 2,
    borderColor: '#00d2ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 8, 
  },
  logoText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  titleWrapper: {
    flex: 1,
  },
  headerTitle: {
    color: '#888',
    fontSize: 16,
    letterSpacing: 2,
    fontFamily: FontFamily.interBold,
  },
  headerUnderline: {
    height: 2,
    backgroundColor: '#00d2ff',
    width: '100%',
    marginTop: 4,
  },
  pageTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingHorizontal: 20,
    marginBottom: 20,
    fontFamily: FontFamily.interBold,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121214',
    borderWidth: 1.5,
    borderColor: '#00d2ff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  iconWrapper: {
    width: 45,
    height: 45,
    backgroundColor: '#000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  cardSubtitle: {
    color: '#555',
    fontSize: 14,
    fontStyle: 'italic',
  },
  deleteButton: {
    padding: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#0a0a0c',
    borderTopWidth: 1,
    borderTopColor: '#1a1a1e',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Cartes;