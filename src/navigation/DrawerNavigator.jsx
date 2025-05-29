import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateNoteScreen from '../screens/CreateNoteScreen';
import ViewNoteScreen from '../screens/ViewNoteScreen';
import VerAnotacoesScreen from '../screens/VerAnotacoesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerContent from '../components/DrawerContent';
import { Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { cores } from '../styles/global';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { darkMode } = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: darkMode ? '#7147a6' : '#7147a6',
        },
        headerTintColor: darkMode ? cores.textoClaro : cores.textoEscuro,
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Início" component={HomeScreen} />
      <Drawer.Screen name="Criar Anotação" component={CreateNoteScreen} />
      <Drawer.Screen name="Ver Anotações" component={VerAnotacoesScreen} />
      <Drawer.Screen name="Ver Anotação" component={ViewNoteScreen} />
      <Drawer.Screen name="Configurações" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;