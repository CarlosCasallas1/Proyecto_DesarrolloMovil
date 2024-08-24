import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import globalStyles from '../src/styles/globalStyles.tsx'; // Asegúrate de que esta ruta sea correcta

interface Mascota {
  foto: string;
  nombre: string;
  raza: string;
  tipo: string;
  edad: string;
  dueño: string;
  veterinario: string;
}

interface Props {
  mascota: Mascota;
}

const MascostaCard: React.FC<Props> = ({ mascota }) => {
  const handlePress = () => {
    // Aquí se puede añadir la lógica para navegar o mostrar el formulario de citas
    console.log('Agendar cita para:', mascota.nombre);
    // Ejemplo de navegación o acción:
    // navigation.navigate('AppointmentForm', { mascota });
  };

  return (
    <View style={globalStyles.card}>
      <View style={styles.infoContainer}>
        <Image source={{ uri: mascota.foto }} style={styles.foto} />
        <Text style={styles.nombre}>Nombre de la mascota: {mascota.nombre}</Text>
        <Text style={styles.raza}>Raza de mascota: {mascota.raza}</Text>
        <Text style={styles.tipo}>Tipo de mascota: {mascota.tipo}</Text>
        <Text style={styles.edad}>Edad de mascota: {mascota.edad}</Text>
        <Text style={styles.dueño}>Dueño de mascota: {mascota.dueño}</Text>
        <Text style={styles.veterinario}>Veterinario de la mascota: {mascota.veterinario}</Text>
        <Button onPress={handlePress} title='Agendar cita' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    padding: 10,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  raza: {
    fontSize: 14,
    marginBottom: 5,
  },
  tipo: {
    fontSize: 14,
    marginBottom: 5,
  },
  edad: {
    fontSize: 14,
    marginBottom: 5,
  },
  dueño: {
    fontSize: 14,
    marginBottom: 5,
  },
  veterinario: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default MascostaCard;
