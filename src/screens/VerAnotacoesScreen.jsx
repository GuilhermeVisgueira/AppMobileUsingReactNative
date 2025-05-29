import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getNotes } from '../utils/storage';
import { useTheme } from '../context/ThemeContext';
import { estiloGlobal, cores } from '../styles/global';

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const dia = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const ano = date.getFullYear();
  const hora = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${dia}/${mes}/${ano} ${hora}:${min}`;
};

const VerAnotacoesScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const { darkMode } = useTheme();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadNotes);
    return unsubscribe;
  }, [navigation]);

  const loadNotes = async () => {
    const savedNotes = await getNotes();
    const sortedNotes = savedNotes.sort((a, b) => new Date(b.date) - new Date(a.date));
    setNotes(sortedNotes);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        estiloGlobal.notaItem,
        {
          backgroundColor: darkMode ? cores.secundarioEscuro : cores.secundarioClaro,
          borderColor: darkMode ? cores.cinzaEscuro : cores.cinzaClaro,
        },
      ]}
      onPress={() => navigation.navigate('Ver Anotação', { note: item, index })}
    >
      <Text style={[estiloGlobal.tituloNota, { color: darkMode ? cores.textoEscuro : cores.textoClaro }]}>
        {item.title}
      </Text>
      <Text style={[estiloGlobal.dataNota, { color: darkMode ? '#bbb' : '#666' }]}>
        {formatDate(item.date)}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[estiloGlobal.container, { backgroundColor: darkMode ? cores.fundoEscuro : cores.fundoClaro }]}>
      <Text style={[estiloGlobal.titulo, { color: darkMode ? cores.textoEscuro : cores.textoClaro }]}>
        Todas as Anotações
      </Text>

      {notes.length === 0 ? (
        <Text style={[estiloGlobal.semNotas, { color: darkMode ? '#aaa' : '#666' }]}>
          Nenhuma anotação disponível.
        </Text>
      ) : (
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={(item) => item.date}
        />
      )}
    </View>
  );
};


export default VerAnotacoesScreen;
