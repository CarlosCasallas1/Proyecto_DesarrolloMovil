import React from 'react';
import { View, Text } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';
import globalStyles from '../../src/styles/globalStyles';

const ProductDetailScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <PaperProvider>
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Detalles del Artículo</Text>
        {/* Aquí se mostrarían los detalles del artículo */}
        <Button mode="contained" onPress={() => navigation.navigate('Cart')}>
          Añadir al carrito
        </Button>
      </View>
    </PaperProvider>
  );
};

export default ProductDetailScreen;