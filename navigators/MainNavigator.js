import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegScreen from "../screens/RegScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={HomeScreen} />
            <Tab.Screen name="Productos" component={HomeScreen} />
            <Tab.Screen name="Carrito" component={HomeScreen} />
            <Tab.Screen name="Mi Cuenta" component={HomeScreen} />
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
