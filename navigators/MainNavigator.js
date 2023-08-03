import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
//Screeen 
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegScreen from "../screens/RegScreen";
import CuentaScreen from "../screens/CuentaScreen";
import ProductsScreen from "../screens/ProductsScreen";
import CarritoScreen from "../screens/CarritoScreen"
//iconos
import { Feather } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={WelcomeScreen} options={{
                    tabBarLabel: 'Bienvenido',
                    headerTitle: 'Bienvenido',
                    headerStyle: { backgroundColor:'#3bc1d2d1'},
                    headerTintColor: 'white',

                    tabBarIcon: () => (
                        <Feather name="home" size={30} color={'#040b04fd'} />)}}/>

            
            
            <Tab.Screen name="Productos" component={ProductsScreen} options={{
                    tabBarLabel: 'Cuenta',
                    headerTitle: 'Cuenta',
                    headerStyle: { backgroundColor: '#2bc1d2d1' },
                    headerTintColor: 'white',

                    tabBarIcon: () => ( 
            <MaterialCommunityIcons name="propane-tank" size={24} color="black" />)}}/>
            
              <Tab.Screen name="Carrito" component={CarritoScreen} options={{
                    tabBarLabel: 'Cesta',
                    headerTitle: 'Cesta',
                    headerStyle: { backgroundColor: '#2bc1d2d1' },
                    headerTintColor: 'white',
                        tabBarIcon: () => (
                      <MaterialCommunityIcons name="shopping-search" size={24} color="black" />)}}/>
            <Tab.Screen name="Mi Cuenta" component={CuentaScreen} options={{
                    tabBarLabel: 'Cuenta',
                    headerTitle: 'Cuenta',
                    headerStyle: { backgroundColor: '#2bc1d2d1' },
                    headerTintColor: 'white',
                         tabBarIcon: () => (
                      <MaterialCommunityIcons name="account-circle" size={24} color='#000000ff' />)}}/>
          

        </Tab.Navigator>
    )
}

function MyStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Registrarse" component={RegScreen}/>
            <Stack.Screen name="Home" component={MyTabs}/>
        </Stack.Navigator>
    )
}

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
