import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import Inventory, { Product } from '../../UI/Inventory'; 

const Confirmation: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      Alert.alert('Product Added', `${selectedProduct.title} has been added to your cart.`);
      setSelectedProduct(null); // Cierra el modal después de añadir al carrito
    }
  };

  const handleAddToFavorites = () => {
    if (selectedProduct) {
      Alert.alert('Product Added to Favorites', `${selectedProduct.title} has been added to your favorites.`);
      // Aquí puedes añadir la lógica para guardar el producto en favoritos
    }
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.cartButton}
        mode="contained"
        onPress={() => navigation.navigate('Cart')}
      >
        Cart
      </Button>
      <Button
        style={styles.favoriteButton}
        mode="contained"
        onPress={() => navigation.navigate('WhiteList')}
      >
        Favorites
      </Button>
      <Text style={styles.title}>Product Information</Text>

      <Inventory onSelect={handleProductSelect} />
      {selectedProduct && (
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
          <Image source={{ uri: selectedProduct.imageUrl }} style={styles.modalImage} />
          <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
          <Text style={styles.modalData}>Type: {selectedProduct.type}</Text>
          <Text style={styles.modalData}>Year: {selectedProduct.year}</Text>
          <Text style={styles.modalData}>Price: ${selectedProduct.price}</Text>
          <View style={styles.buttonContainer}>
            <Button mode="outlined" onPress={() => setSelectedProduct(null)}>
              Close
            </Button>
            <Button mode="contained" onPress={handleAddToCart}>
            Add cart
            </Button>
            <Button mode="contained" onPress={handleAddToFavorites}>
            Add favorites
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 110, // Ajuste para posicionar el botón Favorites correctamente
    zIndex: 1,
  },
  modalContainer: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    right: '10%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalData: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default Confirmation;



/*import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import Inventory, { Product } from '../../UI/Inventory'; 


const Confirmation: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      Alert.alert('Product Added', `${selectedProduct.title} has been added to your cart.`);
      setSelectedProduct(null); // Cierra el modal después de añadir al carrito
    }
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.cartButton}
        mode="contained"
        onPress={() => navigation.navigate('Cart')}
      >
        Cart
      </Button>
      <Button
        style={styles.favoriteButton}
        mode="contained"
        onPress={() => navigation.navigate('FavoritesScreen')}
      >
        Favorite
      </Button>
      <Text style={styles.title}>Product Information</Text>

      <Inventory onSelect={handleProductSelect} />
      {selectedProduct && (
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
          <Image source={{ uri: selectedProduct.imageUrl }} style={styles.modalImage} />
          <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
          <Text style={styles.modalData}>Type: {selectedProduct.type}</Text>
          <Text style={styles.modalData}>Year: {selectedProduct.year}</Text>
          <Text style={styles.modalData}>Price: ${selectedProduct.price}</Text>
          <View style={styles.buttonContainer}>
            <Button mode="outlined" onPress={() => setSelectedProduct(null)}>
              Close
            </Button>
            <Button mode="contained" onPress={handleAddToCart}>
              Add to cart
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 110, // Ajuste para posicionar el botón Favorite correctamente
    zIndex: 1,
  },
  modalContainer: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    right: '10%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalData: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default Confirmation;
*/