import React from 'react';
import { View, Text } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';
import globalStyles from '../src/styles/globalStyles';



const MyPurchasesScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <PaperProvider>
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Mis Compras</Text>
        {/* Aquí se mostrarían las compras realizadas */}
        <Button mode="contained" onPress={() => navigation.navigate('Home')}>
          Volver a Inicio
        </Button>
      </View>
    </PaperProvider>
  );
};

export default MyPurchasesScreen;