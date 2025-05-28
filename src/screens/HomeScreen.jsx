import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { getNotes } from '../utils/storage';
import { useTheme } from '../context/ThemeContext';

const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { darkMode } = useTheme();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadNotes);
    return unsubscribe;
  }, [navigation]);

  const loadNotes = async () => {
    const savedNotes = await getNotes();
    const sortedNotes = savedNotes.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setNotes(sortedNotes);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.noteItem,
        {
          backgroundColor: darkMode ? '#222' : '#f7f7f7',
          borderColor: darkMode ? '#444' : '#ccc',
        },
      ]}
      onPress={() =>
        navigation.navigate('Ver Anotação', { note: item, index })
      }
    >
      <Text
        style={[styles.noteTitle, { color: darkMode ? '#fff' : '#000' }]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? '#111' : '#fff' },
      ]}
    >
      <Text style={[styles.title, { color: darkMode ? '#fff' : '#000' }]}>
        Suas Anotações
      </Text>

      <TextInput
        style={[
          styles.searchInput,
          {
            backgroundColor: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#000',
            borderColor: darkMode ? '#555' : '#ccc',
          },
        ]}
        placeholder="Buscar..."
        placeholderTextColor={darkMode ? '#aaa' : '#888'}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList
        data={filteredNotes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.buttonWrapper}>
        <Button
          title="Criar Nova Anotação"
          onPress={() => navigation.navigate('Criar Anotação')}
          color={darkMode ? '#3399ff' : '#007AFF'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  searchInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 40,
    borderRadius: 6,
  },
  noteItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  buttonWrapper: {
    marginTop: 10,
  },
});

export default HomeScreen;
