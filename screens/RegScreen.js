import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SimpleLineIcons } from '@expo/vector-icons';
export default function RegScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = async () => {
    if (!username || !email || !edad || !password) {
      Alert.alert("Error", "Todos los campos son requeridos");
      return;
    }
      const newUser = {
        username: username,
        email: email,
        edad: edad,
        password: password,
      };
      try {
        const existingUsersString = await AsyncStorage.getItem("users");
        const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : { usuarios: [] };
        existingUsers.usuarios.push(newUser);
        await AsyncStorage.setItem("users", JSON.stringify(existingUsers));
        Alert.alert("Éxito", "Usuario registrado correctamente");
        navigation.navigate("Login");
      } catch (error) {
        console.error("Error al guardar los datos del usuario: ", error);
        Alert.alert("Error", "Ocurrió un error al registrar el usuario");
      };
    }
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.txt1}>Registrarse</Text>
          <Image source={{ uri: ("https://drive.google.com/uc?export=view&id=1_60IjHQDosiyzTl05YyB5VvxXHgiHKl_") }}
            style={styles.img} />
          <Text style={styles.txt1}>Store Dress</Text>
        </View>
        <View style={styles.middleSection}>
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={(text) => setUsername(text)}
            keyboardType='default'
          />
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Edad"
            keyboardType="numeric"
            value={edad}
            onChangeText={(text) => setEdad(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.btn1} onPress={registerUser}>
            <SimpleLineIcons name="login" size={24} style={styles.icon} />
            <Text style={styles.txt2}>Registrarse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate("Welcome")}>
            <SimpleLineIcons name="logout" size={24} style={styles.icon} />
            <Text style={styles.txt2}>Salir</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.txtPass}>Registrarse con...</Text>
        <View style={styles.lowerSection}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/')}>
            <Image source={{ uri: ("https://drive.google.com/uc?export=view&id=1a3pwV3O2xdcgeKAw88TVcwqMriQmpWmR") }} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.gmail.com/')}>
            <Image source={{ uri: ("https://drive.google.com/uc?export=view&id=18Bj4b66VZQbgRnmmc5WB8Vj6s3PTxouE") }} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.twitter.com/')}>
            <Image source={{ uri: ("https://drive.google.com/uc?export=view&id=1K0HfAtT--HQhY8SFYY81yE5tqJzHrVYA") }} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    txt1: {
      fontSize: 40,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#0068f0'
    },
    img: {
      height: 150,
      width: 230,
      borderRadius: 15,
      marginBottom: 10,
      resizeMode: 'contain'
    },
    middleSection: {
      padding: 20,
      justifyContent: 'center'
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10
    },
    icon: {
      marginRight: 10,
      color: 'white'
    },
    btn1: {
      backgroundColor: '#0068f0',
      marginBottom: 8,
      padding: 12,
      borderRadius: 10,
      shadowColor: 'gray',
      elevation: 5,
      flexDirection: 'row',
      margin: 8,
      alignItems: 'center',
    },
    txt2: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      justifyContent: 'space-between'
    },
    txtPass: {
      color: '#0068f0',
      textAlign: 'center',
      fontSize: 15,
      margin: 10
    },
    lowerSection: {
      backgroundColor: '#9e9e9e4d',
      borderRadius: 15,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingHorizontal: 40,
    },
    line: {
      borderWidth: 1,
      width: '70%',
      borderColor: '#0068f0'
    },
    socialIcon: {
      height: 40,
      width: 40,
      margin: 10
    },
  });