import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { estiloGlobal, cores } from '../styles/global';

const SettingsScreen = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <View
      style={[
        estiloGlobal.container,
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: darkMode ? cores.fundoEscuro : cores.fundoClaro,
        },
      ]}
    >
      <Text
        style={{
          fontSize: 20,
          marginBottom: 12,
          color: darkMode ? cores.textoEscuro : cores.textoClaro,
        }}
      >
        Tema Escuro
      </Text>

      <Switch value={darkMode} onValueChange={toggleTheme} />
    </View>
  );
};



export default SettingsScreen;
