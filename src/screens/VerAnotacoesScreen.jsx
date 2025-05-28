import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getNotes } from '../utils/storage';
import { useTheme } from '../context/ThemeContext';

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
        styles.noteItem,
        {
          backgroundColor: darkMode ? '#222' : '#f7f7f7',
          borderColor: darkMode ? '#444' : '#ccc',
        },
      ]}
      onPress={() => navigation.navigate('Ver Anotação', { note: item, index })}
    >
      <Text style={[styles.noteTitle, { color: darkMode ? '#fff' : '#000' }]}>{item.title}</Text>
      <Text style={[styles.noteDate, { color: darkMode ? '#bbb' : '#666' }]}>{formatDate(item.date)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#111' : '#fff' }]}>
      <Text style={[styles.title, { color: darkMode ? '#fff' : '#000' }]}>Todas as Anotações</Text>

      {notes.length === 0 ? (
        <Text style={[styles.noNotes, { color: darkMode ? '#aaa' : '#666' }]}>
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

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  noteItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
  },
  noteTitle: { fontSize: 18, fontWeight: '500' },
  noteDate: { fontSize: 14, marginTop: 4 },
  noNotes: { textAlign: 'center', marginTop: 50, fontSize: 16 },
});

export default VerAnotacoesScreen;
