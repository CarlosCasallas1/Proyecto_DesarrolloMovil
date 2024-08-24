import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PaperProvider, Button, TextInput } from 'react-native-paper';

interface Props {
  navigation: {
    navigate: (screen: string, params?: object) => void;
  };
}

const Login: React.FC<Props> = ({ navigation }) => {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    console.log('Navigating to Confirmation screen with products:', []);
    navigation.navigate('Confirmation', { products: [] }); // Ajusta el valor según sea necesario
  };

  const handleCreateAccount = () => {
    console.log('Navigating to RegisterScreen');
    navigation.navigate('RegisterScreen'); // Navegar a RegisterScreen
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.label}>User:</Text>
        <TextInput
          style={styles.textInput}
          value={user}
          onChangeText={setUser}
          placeholder="Enter your username"
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
          onPress={handleLogin}
        >
          Login
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={handleCreateAccount}
        >
          Create Account
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

export default Login;
