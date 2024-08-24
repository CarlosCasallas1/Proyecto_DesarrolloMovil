// ProductListScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { PaperProvider, TextInput, Button } from 'react-native-paper';
import globalStyles from '../../src/styles/globalStyles';
import { Products, Product } from '../../UI/Inventory'; // Asegúrate de que esta ruta sea correcta

const groupByCategory = (products: Product[]) => {
  return products.reduce((acc, product) => {
    if (!acc[product.type]) {
      acc[product.type] = [];
    }
    acc[product.type].push(product);
    return acc;
  }, {} as { [key: string]: Product[] });
};

const ProductListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const groupedProducts = groupByCategory(Products);
  const allProducts = Object.values(groupedProducts).flat(); // Aplana el objeto agrupado en un solo array

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = allProducts.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <PaperProvider>
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Buscar Artículos</Text>
        <TextInput
          style={globalStyles.textInput}
          placeholder="Buscar..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
              <Button
                mode="outlined"
                onPress={() => navigation.navigate('ProductDetail', { product: item })}
              >
                Ver Detalles
              </Button>
            </View>
          )}
        />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
});

export default ProductListScreen;
