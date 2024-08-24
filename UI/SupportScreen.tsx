import React from 'react';
import { View, Text } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';
import globalStyles from '../src/styles/globalStyles';

const SupportScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <PaperProvider>
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Ayuda y Soporte</Text>
        {/* Aquí se proporcionarían las opciones de soporte */}
        <Button mode="contained" onPress={() => navigation.navigate('Home')}>
          Volver a Inicio
        </Button>
      </View>
    </PaperProvider>
  );
};

export default SupportScreen;