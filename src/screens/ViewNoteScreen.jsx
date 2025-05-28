import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ViewNoteScreen = ({ route, navigation }) => {
  const { note, index } = route.params;
  const { darkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#111' : '#fff' }]}>
      <Text style={[styles.title, { color: darkMode ? '#fff' : '#000' }]}>{note.title}</Text>
      <Text style={[styles.content, { color: darkMode ? '#ccc' : '#333' }]}>{note.content}</Text>

      <Button
        title="Editar"
        color={darkMode ? '#3399ff' : '#007AFF'}
        onPress={() => navigation.navigate('Criar Anotação', { note, index })}
      />

      <View style={styles.spacer} />

      <Button
        title="Voltar para Anotações"
        color={darkMode ? '#aaa' : '#555'}
        onPress={() => navigation.navigate('Ver Anotações')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
  title: { fontSize: 24, marginBottom: 10, textAlign: 'center' },
  content: { fontSize: 16, marginBottom: 20 },
  spacer: { height: 10 },
});

export default ViewNoteScreen;
