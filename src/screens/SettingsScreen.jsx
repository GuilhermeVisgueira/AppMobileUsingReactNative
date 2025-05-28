import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const SettingsScreen = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#111' : '#fff' }]}>
      <Text style={[styles.label, { color: darkMode ? '#fff' : '#000' }]}>Tema Escuro</Text>
      <Switch value={darkMode} onValueChange={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 12,
  },
});

export default SettingsScreen;
