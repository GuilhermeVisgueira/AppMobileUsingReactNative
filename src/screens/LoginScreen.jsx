import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { estiloGlobal, cores } from '../styles/global';

const LoginScreen = ({ navigation }) => {
  const { darkMode } = useTheme();

  return (
    <View style={[estiloGlobal.container, { backgroundColor: darkMode ? cores.fundoEscuro : cores.fundoClaro }]}>
      <Text style={[estiloGlobal.titulo, { color: darkMode ? cores.textoClaro : cores.textoEscuro }]}>
        Bem-vindo
      </Text>

      <TextInput
        style={[
          estiloGlobal.input,
          {
            backgroundColor: darkMode ? cores.cinzaEscuro : cores.fundoClaro,
            color: darkMode ? cores.textoEscuro : cores.textoClaro,
            borderColor: darkMode ? cores.cinzaEscuro : cores.cinzaClaro,
          },
        ]}
        placeholder="Email"
        placeholderTextColor={darkMode ? '#aaa' : '#888'}
      />

      <TextInput
        style={[
          estiloGlobal.input,
          {
            backgroundColor: darkMode ? cores.cinzaEscuro : cores.fundoClaro,
            color: darkMode ? cores.textoEscuro : cores.textoClaro,
            borderColor: darkMode ? cores.cinzaEscuro : cores.cinzaClaro,
          },
        ]}
        placeholder="Senha"
        placeholderTextColor={darkMode ? '#aaa' : '#888'}
        secureTextEntry
      />

      <Button
        title="Entrar"
        color={darkMode ? cores.primarioEscuro : cores.primarioClaro}
        onPress={() => navigation.navigate('Início')}
      />
    </View>
  );
};


export default LoginScreen;
