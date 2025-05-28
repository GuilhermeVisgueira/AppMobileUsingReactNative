import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { saveNote, updateNote } from '../utils/storage';
import { useTheme } from '../context/ThemeContext';

const CreateNoteScreen = ({ navigation, route }) => {
  const { darkMode } = useTheme();
  const editingNote = route.params?.note || null;
  const noteIndex = route.params?.index;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [route.params]);

  const handleSave = async () => {
    if (!title || !content) {
      Alert.alert('Erro', 'Preencha título e conteúdo');
      return;
    }

    if (editingNote) {
      await updateNote(noteIndex, { title, content });
      Alert.alert('Sucesso', 'Nota atualizada!');
    } else {
      await saveNote({ title, content });
      Alert.alert('Sucesso', 'Nota criada!');
    }

    navigation.navigate('Ver Anotações');
  };

  const handleClear = () => {
    setTitle('');
    setContent('');
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#111' : '#f9f9f9' }]}>
      <Text style={[styles.title, { color: darkMode ? '#fff' : '#333' }]}>
        {editingNote ? 'Editar Anotação' : 'Criar Anotação'}
      </Text>

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#000',
            borderColor: darkMode ? '#555' : '#ccc',
          },
        ]}
        placeholder="Título"
        placeholderTextColor={darkMode ? '#888' : '#999'}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[
          styles.input,
          styles.textArea,
          {
            backgroundColor: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#000',
            borderColor: darkMode ? '#555' : '#ccc',
          },
        ]}
        placeholder="Conteúdo"
        placeholderTextColor={darkMode ? '#888' : '#999'}
        value={content}
        onChangeText={setContent}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity
        style={[styles.saveButton, { backgroundColor: darkMode ? '#3399ff' : '#007AFF' }]}
        onPress={handleSave}
      >
        <Text style={styles.saveButtonText}>SALVAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.clearButton, { backgroundColor: darkMode ? '#444' : '#ddd' }]}
        onPress={handleClear}
      >
        <Text style={[styles.clearButtonText, { color: darkMode ? '#eee' : '#333' }]}>
          LIMPAR
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
  title: { fontSize: 26, fontWeight: '600', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    height: 45,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  clearButton: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  clearButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default CreateNoteScreen;
