import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PaperProvider, TextInput, Button } from 'react-native-paper';
import globalStyles from '../src/styles/globalStyles';

const CreateBranchScreen: React.FC = () => {
  const handleConfirm = () => {
    // Lógica para confirmar la creación de la sucursal
    console.log('Sucursal confirmada');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          label="Owner name"
          style={styles.input}
        />
        <TextInput
          label="Branch name"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          label="Email"
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          label="Branch Number"
          style={styles.input}
        />
        <TextInput
          label="Personal Identification"
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={handleConfirm}
          style={styles.button} 
        >
          Confirm
        </Button>
      </View>
    </PaperProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 20, 
    backgroundColor: '#6200ee', 
  },
});

export default CreateBranchScreen;
