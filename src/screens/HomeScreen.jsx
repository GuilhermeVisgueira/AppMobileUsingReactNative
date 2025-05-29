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
import { estiloGlobal, cores } from '../styles/global';


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
    const sortedNotes = savedNotes.sort((a, b) => new Date(b.date) - new Date(a.date));
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
        estiloGlobal.notaItem,
        {
          backgroundColor: darkMode ? cores.secundarioEscuro : cores.secundarioClaro,
          borderColor: darkMode ? cores.cinzaEscuro : cores.cinzaClaro,
        },
      ]}
      onPress={() => navigation.navigate('Ver Anotação', { note: item, index })}
    >
      <Text style={[estiloGlobal.tituloNota, { color: darkMode ? cores.textoClaro : cores.textoEscuro }]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[estiloGlobal.container, { backgroundColor: darkMode ? cores.fundoEscuro : cores.fundoClaro }]}>
      <Text style={[estiloGlobal.titulo, { color: darkMode ? cores.textoClaro : cores.textoEscuro }]}>
        Suas Anotações
      </Text>

      <TextInput
        style={[
          estiloGlobal.inputBusca,
          {
            backgroundColor: darkMode ? cores.cinzaEscuro : cores.fundoClaro,
            color: darkMode ? cores.textoClaro : cores.textoEscuro,
            borderColor: darkMode ? cores.cinzaEscuro : cores.cinzaClaro,
          },
        ]}
        placeholder="Buscar..."
        placeholderTextColor={darkMode ? cores.textoClaro : cores.textoEscuro}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList style={{margin:15}}
        data={filteredNotes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}

        
      />

      <View style={{ 
      
      marginVertical: 110,
      alignItems: 'center',
      alignSelf: 'center',
      width: '80%',
      borderRadius: 8,}}>
        
        <Button
          
          title="Criar Nova Anotação"
          onPress={() => navigation.navigate('Criar Anotação')}
          color={darkMode ? cores.primarioEscuro : cores.primarioClaro}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
