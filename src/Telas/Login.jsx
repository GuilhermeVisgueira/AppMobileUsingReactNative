import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Login = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />
      <Button style={styles.button} title="Entrar" onPress={Login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16
  },
  title: {
    fontSize: 24, marginBottom: 16
  },
  input: {
    height: 50,
    borderColor: '#3A2258',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    margin: 15
  }
});