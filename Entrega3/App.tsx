import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Telas existentes
import Login from "./screens/Login"; 
import Inicial from "./screens/Inicial";
import PainelLoja from "./screens/PainelLoja";
import Mensagens from "./screens/Mensagens";
import Cartes from "./screens/Cartes"; 
import Perfil from "./screens/Perfil";
import Cadastro from "./screens/Cadastro"; 
import EsqueciASenha from "./screens/EsqueciASenha";

// Telas de Recuperação
import RedefenirSenha from "./screens/RedefenirSenha";
import ConfirmarEmail from "./screens/ConfrimarEMail"; 

// NOVAS TELAS DE FLUXO DE CADASTRO
import ContCadastroUsuario from "./screens/ContCadastroUsuario";
import ContCadastroServios2 from "./screens/ContCadastroServios2";
import ContCadastroServios3 from "./screens/ContCadastroServios3";
import ContCadastroServios4 from "./screens/ContCadastroServios4"; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        {/* Fluxo de Autenticação e Cadastro */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        
        {/* Rotas de Continuação do Cadastro */}
        <Stack.Screen 
          name="ContCadastroUsuario" 
          component={ContCadastroUsuario} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ContCadastroServios2" 
          component={ContCadastroServios2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ContCadastroServios3" 
          component={ContCadastroServios3} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ContCadastroServios4" 
          component={ContCadastroServios4} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen name="EsqueciASenha" component={EsqueciASenha} options={{ headerShown: false }} />
        
        {/* Fluxo de Recuperação de Senha */}
        <Stack.Screen 
          name="ConfirmarEmail" 
          component={ConfirmarEmail} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="RedefenirSenha" 
          component={RedefenirSenha} 
          options={{ headerShown: false }} 
        />
        
        {/* Fluxo Principal do App */}
        <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }} /> 
        <Stack.Screen name="PainelLoja" component={PainelLoja} options={{ headerShown: false }} /> 
        <Stack.Screen name="Mensagens" component={Mensagens} options={{ headerShown: false }} />
        <Stack.Screen name="Cartoes" component={Cartes} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}