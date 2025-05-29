import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { estiloGlobal, cores } from '../styles/global';

const ViewNoteScreen = ({ route, navigation }) => {
  const { note, index } = route.params;
  const { darkMode } = useTheme();

  return (
    <View
      style={[
        estiloGlobal.container,
        {
          justifyContent: 'center',
          backgroundColor: darkMode ? cores.fundoEscuro : cores.fundoClaro,
        },
      ]}
    >
      <Text style={[estiloGlobal.titulo, { color: darkMode ? cores.textoEscuro : cores.textoClaro }]}>
        {note.title}
      </Text>

      <Text
        style={{
          fontSize: 16,
          marginBottom: 20,
          color: darkMode ? '#ccc' : '#333',
        }}
      >
        {note.content}
      </Text>

      <Button
        title="Editar"
        color={darkMode ? cores.primarioEscuro : cores.primarioClaro}
        onPress={() => navigation.navigate('Criar Anotação', { note, index })}
      />

      <View style={{ height: 10 }} />

      <Button
        title="Voltar para Anotações"
        color={darkMode ? '#aaa' : '#555'}
        onPress={() => navigation.navigate('Ver Anotações')}
      />
    </View>
  );
};


export default ViewNoteScreen;
