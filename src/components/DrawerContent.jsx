import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { estiloGlobal, cores } from '../styles/global';

const DrawerContent = (props) => {
  const { darkMode } = useTheme();

  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: darkMode ? '#7147a6' : '#7147a6' }}
    >
      <View style={styles.drawerContent}>
        <DrawerItem
        
          label="Início"
          labelStyle={{ color: darkMode ? '#fff' : '#000' }}
          onPress={() => props.navigation.navigate('Início')}
        />
        <DrawerItem
          label="Criar Anotação"
          labelStyle={{ color: darkMode ? '#fff' : '#000' }}
          onPress={() => props.navigation.navigate('Criar Anotação')}
        />
        <DrawerItem
          label="Ver Anotações"
          labelStyle={{ color: darkMode ? '#fff' : '#000' }}
          onPress={() => props.navigation.navigate('Ver Anotações')}
        />
        <DrawerItem
          label="Configurações"
          labelStyle={{ color: darkMode ? '#fff' : '#000' }}
          onPress={() => props.navigation.navigate('Configurações')}
        />
        <DrawerItem
          label="Sair"
          labelStyle={{ color: darkMode ? '#fff' : '#000' }}
          onPress={() => props.navigation.navigate('Login')}
          
         
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 20,
    
    
  },
});

export default DrawerContent;
