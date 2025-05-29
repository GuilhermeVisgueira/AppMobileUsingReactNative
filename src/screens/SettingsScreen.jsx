import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { estiloGlobal, cores } from '../styles/global';
import SwitchToggle from 'react-native-switch-toggle';

const SettingsScreen = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <View
      style={[
        estiloGlobal.container,
        {
          backgroundColor: darkMode ? cores.fundoEscuro : cores.fundoClaro,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      <Text
        style={{
          fontSize: 20,
          marginBottom: 12,
          color: darkMode ? cores.textoClaro : cores.textoEscuro,
        }}
      >
        Tema Escuro
      </Text>

      <SwitchToggle
        switchOn={darkMode}
        onPress={toggleTheme}
        circleColorOff={cores.primarioClaro}
        circleColorOn={cores.primarioClaro}
        backgroundColorOn="#E9E0F7"
        backgroundColorOff="#E9E0F7"
        containerStyle={{
          marginTop: 16,
          width: 60,
          height: 30,
          borderRadius: 25,
          padding: 5,
        }}
        circleStyle={{
          width: 20,
          height: 20,
          borderRadius: 20,
        }}
      />
    </View>
  );
};

export default SettingsScreen