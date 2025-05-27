import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLogin from './src/Telas/Login';
import TelaInicial from './src/Telas/TelaInicial';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Home" component={TelaInicial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
