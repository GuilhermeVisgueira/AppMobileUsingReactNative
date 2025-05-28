import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTES_KEY = '@notes';

export const getNotes = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(NOTES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Erro ao ler notas', e);
    return [];
  }
};

export const saveNote = async (note) => {
  try {
    const notes = await getNotes();
    const noteWithDate = { ...note, date: new Date().toISOString() };
    const updatedNotes = [...notes, noteWithDate];
    await AsyncStorage.setItem('@notes', JSON.stringify(updatedNotes));
  } catch (e) {
    console.error('Erro ao salvar nota', e);
  }
};

export const updateNote = async (index, updatedNote) => {
  try {
    const notes = await getNotes();
    notes[index] = { ...updatedNote, date: new Date().toISOString() };
    await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch (e) {
    console.error('Erro ao atualizar nota', e);
  }
};
