// Inventory.tsx
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export type Product = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  type: string;
  year: string;
  price: number;
};

export const Products: Product[] = [
  {
    id: 1,
    title: 'Sony WH-1000XM4',
    imageUrl: 'https://www.sony.com.co/image/009280ddf10c290558fa05244041e878?fmt=png-alpha&wid=720',
    description: 'Audífonos con cancelación de ruido de alta calidad, perfectos para disfrutar de la música sin distracciones.',
    type: 'Audífonos',
    year: '2020',
    price: 350000,
  },
  {
    id: 2,
    title: 'iPhone 13 Pro',
    imageUrl: 'https://mac-center.com/cdn/shop/files/iPhone_13_Pro_Sierra_Blue_PDP_Image_position-1A__CLCO_v1_0be180ca-e4c0-4416-9ef7-64245ff7e2e5.jpg?v=1700292348',
    description: 'El último modelo de iPhone con cámara mejorada y rendimiento excepcional.',
    type: 'Celular',
    year: '2021',
    price: 4600000,
  },
  {
    id: 3,
    title: 'MacBook Pro 16"',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_703599-MCO51801991554_102022-O.webp',
    description: 'Una computadora potente para profesionales, con pantalla retina y procesador M1.',
    type: 'Computadora',
    year: '2021',
    price: 11000000,
  },
  {
    id: 4,
    title: 'Silla Ergonomica X-Chair',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_886377-MLU73688207188_012024-O.webp',
    description: 'Silla ergonómica con soporte lumbar y diseño moderno, ideal para largas jornadas de trabajo.',
    type: 'Silla',
    year: '2022',
    price: 800000,
  },
];

interface InventoryProps {
  onSelect?: (product: Product) => void; // Propiedad opcional
}

const Inventory: React.FC<InventoryProps> = ({ onSelect }) => {
  const productItem = (list: Product) => (
    <TouchableOpacity
      style={styles.container}
      key={list.id}
      onPress={() => onSelect && onSelect(list)} // Verificar que onSelect esté definido
    >
      <Text style={styles.title}>{list.title}</Text>
      <Image source={{ uri: list.imageUrl }} style={styles.img} />
      <View style={styles.container}>
        <Text style={[styles.title, styles.description]}>{list.description}</Text>
        <Text style={[styles.title, styles.description, styles.data]}>Tipo: {list.type}</Text>
        <Text style={[styles.title, styles.description, styles.data]}>Año: {list.year}</Text>
        <Text style={[styles.title, styles.description, styles.data]}>${list.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      {Products.map(productItem)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  description: {
    marginBottom: 10,
  },
  data: {
    color: '#555',
  },
});

export default Inventory;
