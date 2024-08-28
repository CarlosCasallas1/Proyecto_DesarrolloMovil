import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Importa useNavigation y NavigationProp
import { BottomTabParamList } from '../component/types'; // Asegúrate de tener este archivo con las rutas definidas

const BottomMenu = () => {
  const navigation = useNavigation<NavigationProp<BottomTabParamList>>(); // Especifica el tipo de navegación

  const menuItems = [
    { name: 'home', label: 'Inicio', screen: 'Confirmation' },
    { name: 'list-ul', label: 'Categorías', screen: 'MyPurchasesScreen' },
    { name: 'heart-o', label: 'Favoritos', screen: 'WhiteList' },
    { name: 'shopping-cart', label: 'Carrito', screen: 'Cart' },
    { name: 'info-circle', label: 'Más', screen: 'SupportScreen' },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map(item => (
        <TouchableOpacity
          key={item.name}
          style={styles.button}
          onPress={() => navigation.navigate(item.screen as keyof BottomTabParamList)} // Asegúrate de que 'item.screen' sea una clave de BottomTabParamList
        >
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'rgba(250,250,250,0.9)',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(200,200,200,0.2)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default BottomMenu;






/*
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BottomMenu = () => {
  const menuItems = [
    { name: 'home', label: 'Inicio' },
    { name: 'list-ul', label: 'Categorías' },
    { name: 'heart-o', label: 'Favoritos' },
    { name: 'shopping-cart', label: 'Carrito' },
    { name: 'info-circle', label: 'Más' },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map(item => (
        <TouchableOpacity
          key={item.name}
          style={styles.button}
        >
          <Text style={styles.label}>{item.label}</Text> {/* Asegurarse de que todo texto esté dentro de <Text> */
        //}
    /*   </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'rgba(250,250,250,0.9)',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(200,200,200,0.2)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#000', // Color negro para visibilidad, puedes ajustar según el diseño
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default BottomMenu;
*/