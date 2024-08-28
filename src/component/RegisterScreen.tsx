import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
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
      <ImageBackground
        source={require('../../src/images/MovilNavFondo.jpg')}
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={[styles.textInput, styles.customInputWidth]}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#888"
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={[styles.textInput, styles.customInputWidth]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholder="Enter your password"
              placeholderTextColor="#888"
            />
            <Button
              style={styles.customBtn}
              mode="contained"
              onPress={handleRegister}
            >
              Register
            </Button>
          </View>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 34,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight: 'bold',
  },
  textInput: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: '100%',
  },
  customBtn: {
    marginBottom: 16,
    width: '100%',
  },
  customInputWidth: {
    paddingLeft: 70,
    paddingRight: 70,
  },
});

export default RegisterScreen;
