import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importar vistas
import Cart from './UI/Cart';
import Login from './src/component/Login';
import Inventory from './UI/Inventory';
import Confirmation from './src/component/Confirmation';
import RegisterScreen from './src/component/RegisterScreen'; // Asegúrate de importar RegisterScreen
import MascotaCard from './UI/MascotaCard';

// Definir el tipo de Producto
export type Product = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  type: string;
  year: string;
  price: number;
};

// Definir el tipo de parámetros del Stack Navigator
export type RootStackParamList = {
  Cart: undefined;
  Login: undefined;
  Inventory: undefined;
  Confirmation: { products: Product[] }; // Tipo de parámetro para la pantalla Confirmation
  RegisterScreen?: undefined; // Añadido tipo para RegisterScreen
  MascotaCard?: undefined;
};

// Crear el Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name='Confirmation'
            component={Confirmation}
            options={{ title: 'Confirmation' }}
          />
          <Stack.Screen
            name='Inventory'
            component={Inventory} 
            options={{ title: 'Inventory' } }
          />
          <Stack.Screen
            name='Cart'
            component={Cart}
            options={{ title: 'Carts' }}
          />
          <Stack.Screen
            name='RegisterScreen'
            component={RegisterScreen}
            options={{ title: 'Register' }}
          />
        
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;