import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { saveNote, updateNote } from '../utils/storage';
import { useTheme } from '../context/ThemeContext';
import { estiloGlobal, cores } from '../styles/global';

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
    <View style={[estiloGlobal.container, { backgroundColor: darkMode ? cores.fundoEscuro : cores.fundoClaro }]}>
      <Text style={[estiloGlobal.titulo, { color: darkMode ? cores.textoClaro : cores.textoEscuro }]}>
        {editingNote ? 'Editar Anotação' : 'Criar Anotação'}
      </Text>

      <TextInput
        style={[estiloGlobal.input,estiloGlobal.textArea, {
          backgroundColor: darkMode ? cores.cinzaEscuro : cores.fundoClaro,
          color: darkMode ? cores.textoClaro : cores.textoEscuro,
          borderColor: darkMode ? cores.cinzaEscuro : cores.cinzaClaro
          },
        ]}
        placeholder="Título"
        placeholderTextColor={darkMode ? cores.textoClaro : cores.textoEscuro}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[estiloGlobal.input, estiloGlobal.textArea, {
          backgroundColor: darkMode ? cores.cinzaEscuro : cores.fundoClaro,
          color: darkMode ? cores.textoClaro : cores.textoEscuro,
          borderColor: darkMode ? cores.cinzaEscuro : cores.cinzaClaro,
          },
        ]}
        placeholder="Conteúdo"
        placeholderTextColor={darkMode ?  cores.textoClaro : cores.textoEscuro}
        value={content}
        onChangeText={setContent}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity
       style={[estiloGlobal.botaoPrimario, { backgroundColor: darkMode ? cores.primarioEscuro : cores.primarioClaro }]}
        onPress={handleSave}
      >
        <Text style={estiloGlobal.textoBotaoPrimario}>SALVAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[estiloGlobal.botaoSecundario, { backgroundColor: darkMode ? cores.cinzaEscuro : cores.cinzaClaro }]}
        onPress={handleClear}
      >
        <Text style={[estiloGlobal.textoBotaoSecundario, { color: darkMode ? '#eee' : 'black' }]}>LIMPAR</Text>
      </TouchableOpacity>
    </View>
  );
};



export default CreateNoteScreen;
