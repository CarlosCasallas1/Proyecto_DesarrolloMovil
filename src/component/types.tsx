  // types.tsx
  import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
  import { StackNavigationProp } from '@react-navigation/stack';

  // Definir el tipo de rutas para BottomTabNavigator
  export type BottomTabParamList = {
    Confirmation: undefined;
    MyPurchasesScreen: undefined;
    WhiteList: undefined;
    Cart: undefined;
    SupportScreen: undefined;
  };

  // Definir el tipo de navegación para BottomTabNavigator
  export type BottomTabNavigation = BottomTabNavigationProp<BottomTabParamList>;

  // Definir el tipo de rutas para StackNavigator si es necesario
  export type RootStackParamList = {
    Login: undefined;
    BottomTab: undefined;
    Inventory: undefined;
    Confirmation: { products: Product[] };
    Cart: undefined;
    RegisterScreen?: undefined;
  };

  // Definir el tipo de navegación para StackNavigator si es necesario
  export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

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
