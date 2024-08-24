import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PaperProvider, Button, TextInput } from 'react-native-paper';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegister = () => {
    if (!email || !password) {
      console.log('Por favor, completa todos los campos.');
      return;
    }
    navigation.navigate('Home'); // Ajusta el nombre de la pantalla según sea necesario
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#888"
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Enter your password"
          placeholderTextColor="#888"
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleRegister}
        >
          Register
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  textInput: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  button: {
    width: '100%',
    marginBottom: 16,
  },
});

export default RegisterScreen;
