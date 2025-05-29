import { StyleSheet } from 'react-native';

export const cores = {
  fundoClaro: '#EFE9F7',
  fundoEscuro: '#3A2258',
  textoClaro: '#FFFFFF',
  textoEscuro: 'black',
  primarioClaro: '#6A3EA1',
  primarioEscuro: '#6A3EA1',
  cinzaClaro: '#ccc',
  cinzaEscuro: '#555',
  secundarioClaro: '#8668ab',
  secundarioEscuro: '#8668ab',
};




export const estiloGlobal = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    height: 45,
  },
  textArea: {
    width: '80%',
    height: 54,
    borderRadius: 8,
    borderWidth: 2,
    padding: 16,
    alignSelf: 'center',
  },
  botaoPrimario: {
    paddingVertical: 12,
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    marginBottom: 5,
    borderRadius: 8,
  },
  textoBotaoPrimario: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoSecundario: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  textoBotaoSecundario: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  notaItem: {
    padding: 15,
    margin: 5,
    borderBottomWidth: 1,
    borderRadius: 6,
    alignSelf: 'center',
    width: '80%',
    alignItems: 'center',
  },
  tituloNota: {
    fontSize: 18,
    fontWeight: '500',
  },
  dataNota: {
    fontSize: 14,
    marginTop: 4,
  },
  inputBusca: {
    borderWidth: 1,
    paddingHorizontal: 10,
    alignSelf: 'center',
    height: 40,
    borderRadius: 6,
    width: '80%',
  },
  semNotas: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});