import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Menu from './src/Menu';
 

export default function App() {
  return (
  /*passo 1: remover essa parte do navagation contaner do app.js e passar para outro componente*/
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}

  
