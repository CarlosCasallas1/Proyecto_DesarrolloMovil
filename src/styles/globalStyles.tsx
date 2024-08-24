import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  textInput: {
    height: 40,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    marginTop: 16,
  },
  card: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#080707',
  },
});

export default globalStyles;
