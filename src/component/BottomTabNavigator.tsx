import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, Platform, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Confirmation from '../component/Confirmation';
import MyPurchasesScreen from '../../UI/MyPurchasesScreen';
import WhiteList from '../../UI/WhiteList';
import Cart from '../../UI/Cart';
import SupportScreen from '../../UI/SupportScreen';
import { BottomTabParamList } from '../component/types'; // Asegúrate de que esta ruta sea correcta

const { width } = Dimensions.get('window');

// Crear el BottomTabNavigator
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Confirmation"
      screenOptions={({ route }) => ({
        tabBarLabel: ({ color }) => {
          let label;
          switch (route.name) {
            case 'Confirmation':
              label = 'Inicio';
              break;
            case 'MyPurchasesScreen':
              label = 'Categorías';
              break;
            case 'WhiteList':
              label = 'Favoritos';
              break;
            case 'Cart':
              label = 'Carrito';
              break;
            case 'SupportScreen':
              label = 'Más';
              break;
          }
          return <Text style={{ color, fontSize: 12, marginBottom: 5, fontWeight: 'bold' }}>{label}</Text>;
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Confirmation':
              iconName = 'home';
              break;
            case 'MyPurchasesScreen':
              iconName = 'list-ul';
              break;
            case 'WhiteList':
              iconName = 'heart-o';
              break;
            case 'Cart':
              iconName = 'shopping-cart';
              break;
            case 'SupportScreen':
              iconName = 'info-circle';
              break;
          }
          return <FontAwesome name={iconName as any} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0.5,
          borderTopColor: 'rgba(200,200,200,0.2)',
          backgroundColor: 'rgba(250,250,250,.9)',
        },
        tabBarActiveTintColor: Colors.default.secondaryColor,
        tabBarInactiveTintColor: '#bbb',
      })}
    >
      <BottomTab.Screen
        name="Confirmation"
        component={TabOneNavigator}
      />
      <BottomTab.Screen
        name="MyPurchasesScreen"
        component={TabTwoNavigator}
      />
      <BottomTab.Screen
        name="WhiteList"
        component={TabTreeNavigator}
      />
      <BottomTab.Screen
        name="Cart"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ height: 70, width: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center', backgroundColor: color }}>
              <FontAwesome name="shopping-cart" color="#FFF" size={24} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="SupportScreen"
        component={TabFiveNavigator}
      />
    </BottomTab.Navigator>
  );
}

// Crear los navegadores de pilas para cada pestaña

const TabOneStack = createStackNavigator();
function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerStyle: { backgroundColor: '#FFF', shadowColor: 'transparent' },
          headerStatusBarHeight: Platform.OS === 'ios' ? 40 : 20,
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="MyPurchasesScreen"
        component={MyPurchasesScreen}
        options={{
          headerTitle: 'Categorías',
          headerStyle: { backgroundColor: Colors.default.primaryColorLight },
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabTreeStack = createStackNavigator();
function TabTreeNavigator() {
  return (
    <TabTreeStack.Navigator>
      <TabTreeStack.Screen
        name="WhiteList"
        component={WhiteList}
        options={{
          headerStyle: { backgroundColor: Colors.default.primaryColorLight },
        }}
      />
    </TabTreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator();
function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerStyle: { backgroundColor: Colors.default.primaryColorLight },
        }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator();
function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="SupportScreen"
        component={SupportScreen}
        options={{
          headerStyle: { backgroundColor: Colors.default.primaryColor },
        }}
      />
    </TabFiveStack.Navigator>
  );
}














/* este codigo sirve felipe 

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, Platform, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

import Confirmation from '../component/Confirmation';
import MyPurchasesScreen from '../../UI/MyPurchasesScreen';
import WhiteList from '../../UI/WhiteList';
import Cart from '../../UI/Cart';
import SupportScreen from '../../UI/SupportScreen';
import { BottomTabParamList } from '../component/types'; // Ajusta la ruta según tu estructura

const { width } = Dimensions.get('window');

// Crear el BottomTabNavigator
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Confirmation"
      screenOptions={({ route }) => ({
        tabBarLabel: ({ color }) => {
          let label;
          switch (route.name) {
            case 'Confirmation':
              label = 'Inicio';
              break;
            case 'MyPurchasesScreen':
              label = 'Categorías';
              break;
            case 'WhiteList':
              label = 'Favoritos';
              break;
            case 'Cart':
              label = 'Carrito';
              break;
            case 'SupportScreen':
              label = 'Más';
              break;
          }
          return <Text style={{ color, fontSize: 12, marginBottom: 5, fontWeight: 'bold' }}>{label}</Text>;
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Confirmation':
              iconName = 'home';
              break;
            case 'MyPurchasesScreen':
              iconName = 'list-ul';
              break;
            case 'WhiteList':
              iconName = 'heart-o';
              break;
            case 'Cart':
              iconName = 'shopping-cart';
              break;
            case 'SupportScreen':
              iconName = 'info-circle';
              break;
          }
          return <FontAwesome name={iconName as any} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0.5,
          borderTopColor: 'rgba(200,200,200,0.2)',
          backgroundColor: 'rgba(250,250,250,.9)',
        },
        tabBarActiveTintColor: Colors.default.secondaryColor,
        tabBarInactiveTintColor: '#bbb',
      })}
    >
      <BottomTab.Screen
        name="Confirmation"
        component={TabOneNavigator}
      />
      <BottomTab.Screen
        name="MyPurchasesScreen"
        component={TabTwoNavigator}
      />
      <BottomTab.Screen
        name="WhiteList"
        component={TabTreeNavigator}
      />
      <BottomTab.Screen
        name="Cart"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ height: 70, width: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center', backgroundColor: color }}>
              <FontAwesome name="shopping-cart" color="#FFF" size={24} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="SupportScreen"
        component={TabFiveNavigator}
      />
    </BottomTab.Navigator>
  );
}

// Crear los navegadores de pilas para cada pestaña

const TabOneStack = createStackNavigator();
function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerStyle: { backgroundColor: '#FFF', shadowColor: 'transparent' },
          headerStatusBarHeight: Platform.OS === 'ios' ? 40 : 20,
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="MyPurchasesScreen"
        component={MyPurchasesScreen}
        options={{
          headerTitle: 'Categorías',
          headerStyle: { backgroundColor: Colors.default.primaryColorLight },
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabTreeStack = createStackNavigator();
function TabTreeNavigator() {
  return (
    <TabTreeStack.Navigator>
      <TabTreeStack.Screen
        name="WhiteList"
        component={WhiteList}
        options={{
          headerStyle: { backgroundColor: Colors.default.primaryColorLight },
        }}
      />
    </TabTreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator();
function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerStyle: { backgroundColor: Colors.default.primaryColorLight },
        }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator();
function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="SupportScreen"
        component={SupportScreen}
        options={{
          headerStyle: { backgroundColor: Colors.default.primaryColor },
        }}
      />
    </TabFiveStack.Navigator>
  );
}

*/
























/*import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, Platform, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

import Confirmation from '../component/Confirmation';
import MyPurchasesScreen from '../../UI/MyPurchasesScreen';
import WhiteList from '../../UI/WhiteList';
import Cart from '../../UI/Cart';
import SupportScreen from '../../UI/SupportScreen';
import { BottomTabParamList } from '../component/types'; // Ajusta la ruta según tu estructura

const { width } = Dimensions.get('window');

// Crear el BottomTabNavigator
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Confirmation"
      screenOptions={({ route }) => ({
        tabBarLabel: ({ color }) => {
          let label;
          switch (route.name) {
            case 'Confirmation':
              label = 'Inicio';
              break;
            case 'MyPurchasesScreen':
              label = 'Categorías';
              break;
            case 'WhiteList':
              label = 'Favoritos';
              break;
            case 'Cart':
              label = 'Carrito';
              break;
            case 'SupportScreen':
              label = 'Más';
              break;
          }
          return <Text style={{ color, fontSize: 12, marginBottom: 5, fontWeight: 'bold' }}>{label}</Text>;
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Confirmation':
              iconName = 'home';
              break;
            case 'MyPurchasesScreen':
              iconName = 'list-ul';
              break;
            case 'WhiteList':
              iconName = 'heart-o';
              break;
            case 'Cart':
              iconName = 'shopping-cart';
              break;
            case 'SupportScreen':
              iconName = 'info-circle';
              break;
          }
          return <FontAwesome name={iconName as any} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0.5,
          borderTopColor: 'rgba(200,200,200,0.2)',
          backgroundColor: 'rgba(250,250,250,.9)',
        },
        tabBarActiveTintColor: Colors.default.secondaryColor,
        tabBarInactiveTintColor: '#bbb',
      })}
    >
      <BottomTab.Screen
        name="Confirmation"
        component={TabOneNavigator}
      />
      <BottomTab.Screen
        name="MyPurchasesScreen"
        component={TabTwoNavigator}
      />
      <BottomTab.Screen
        name="WhiteList"
        component={TabTreeNavigator}
      />
      <BottomTab.Screen
        name="Cart"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ height: 70, width: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center', backgroundColor: color }}>
              <FontAwesome name="shopping-cart" color="#FFF" size={24} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="SupportScreen"
        component={TabFiveNavigator}
      />
    </BottomTab.Navigator>
  );
}

// Crear los navegadores de pilas para cada pestaña

const TabOneStack = createStackNavigator();
function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerStyle: { backgroundColor: '#FFF', shadowColor: 'transparent' },
          headerStatusBarHeight: Platform.OS === 'ios' ? 40 : 20,
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="MyPurchasesScreen"
        component={MyPurchasesScreen}
        options={{
          headerTitle: 'Categorías',
          headerStyle: { backgroundColor: Colors.default.primaryColorLight },
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabTreeStack = createStackNavigator();
function TabTreeNavigator() {
  return (
    <TabTreeStack.Navigator>
      <TabTreeStack.Screen
        name="WhiteList"
        component={WhiteList}
        options={{
          headerStyle: { backgroundColor: Colors.default.primaryColorLight },
        }}
      />
    </TabTreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator();
function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerStyle: { backgroundColor: Colors.default.primaryColorLight },
        }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator();
function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="SupportScreen"
        component={SupportScreen}
        options={{
          headerStyle: { backgroundColor: Colors.default.primaryColor },
        }}
      />
    </TabFiveStack.Navigator>
  );
}
*/