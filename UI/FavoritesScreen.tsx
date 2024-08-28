import React, { useState } from 'react';
import { View, Text, Image, FlatList, Button, Modal, TextInput, StyleSheet } from 'react-native';
import globalStyles from '../src/styles/globalStyles'; 
import { Product, Products } from './Inventory'; 



const FavoritesScreen: React.FC <{ navigation: any }> = ({ navigation }) => {
  const [showAppointmentModal, setShowAppointmentModal] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleAppointmentSubmit = () => {
    console.log('User:', user);
    console.log('Password:', password);
    setShowAppointmentModal(false);
  };

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.card, styles.header]}>
        <Text style={styles.headerText}>shopping list</Text>
      
      <View style={styles.main}>
        <FlatList
          data={Products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <View style={globalStyles.card}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardText}>Año: {item.year} | Tipo: {item.type}</Text>
                <Text style={styles.cardText}>Precio: ${item.price}</Text>
              </View>
            </View>
          )}
          
        />
      </View>
      </View>




      <View style={styles.footer}>
        <Button title="Continue shopping" onPress={() => setShowAppointmentModal(true)} />
      </View>

      <Modal
        transparent={true}
        visible={showAppointmentModal}
        onRequestClose={() => setShowAppointmentModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Purchase confirmation</Text>
            <View style={styles.formGroup}>
              <Text>User</Text>
              <TextInput
                style={styles.textInput}
                value={user}
                onChangeText={setUser}
                placeholder="*User*"
              />
            </View>
            <View style={styles.formGroup}>
              <Text>Password</Text>
              <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
                placeholder="*Password*"
                secureTextEntry={true}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={() => setShowAppointmentModal(false)} />
              <Button title="Continue" onPress={() => navigation.navigate('PaymentBranchScreen')} />



     {/* <Button  style={styles.cartButton}   mode="contained" onPress={() => navigation.navigate('Cart')} >
        Cart
      </Button> */}


            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  main: {
    flex: 1,
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
  },
  footer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  formGroup: {
    marginBottom: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FavoritesScreen;


/*
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';
import globalStyles from '../src/styles/globalStyles'; // Ajusta la ruta según tu estructura
import { WhiteList } from '../UI/WhiteList'; // Ajusta la ruta según tu estructura

// Pantalla de favoritos
const FavoritesScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  // Aquí deberías obtener y manejar la 
favorites list
  const favoriteProducts: WhiteList [] = []; // Debes reemplazar esto con la lista real de productos favoritos

  return (
    <PaperProvider>
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Mis Favoritos</Text>
        <FlatList
          data={favoriteProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
            </View>
          )}
        />
        <Button mode="contained" onPress={() => navigation.navigate('Confirmation')}>
          Volver a Inicio
        </Button>
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

export default FavoritesScreen;

*/



/*import React from 'react';
import { View, Text } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';
import globalStyles from '../src/styles/globalStyles';

const FavoritesScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <PaperProvider>
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Mis Favoritos</Text>
        {/* Aquí se mostrarían los artículos favoritos */ //}
        /* <Button mode="contained" onPress={() => navigation.navigate('Home')}>
          Volver a Inicio
        </Button>
      </View>
    </PaperProvider>    
  );
};

export default FavoritesScreen;*/