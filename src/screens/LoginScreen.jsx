import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const LoginScreen = ({ navigation }) => {
  const { darkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#111' : '#fff' }]}>
      <Text style={[styles.title, { color: darkMode ? '#fff' : '#000' }]}>Bem-vindo</Text>

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#000',
            borderColor: darkMode ? '#555' : '#ccc',
          },
        ]}
        placeholder="Email"
        placeholderTextColor={darkMode ? '#aaa' : '#888'}
      />
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#000',
            borderColor: darkMode ? '#555' : '#ccc',
          },
        ]}
        placeholder="Senha"
        placeholderTextColor={darkMode ? '#aaa' : '#888'}
        secureTextEntry
      />

      <Button
        title="Entrar"
        color={darkMode ? '#3399ff' : '#007AFF'}
        onPress={() => navigation.navigate('Início')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});

export default LoginScreen;
