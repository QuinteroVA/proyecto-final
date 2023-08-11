import { View, Text, Image, StyleSheet, Alert, Button, } from "react-native";
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Targeta(props) {
  //const mensaje = () => { Alert.alert("Producto", "Se Agregado  el producto")}
    props.onSelect(props.datos); 
    const agregarCarrito = async (product) => {
      try {
        const cartItemsString = await AsyncStorage.getItem("cart");
        const cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
        cartItems.push(product);
        await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
        Alert.alert("Producto Agregado", "Se ha agregado el producto al carrito");
      } catch (error) {
        console.error("Error al agregar producto al carrito", error);
      }
    };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.card}>
          <Image source={{ uri: props.datos.imagen }} style={styles.imagen} resizeMode="contain"/>
        </View>

        <View>
          <Text style={styles.titulo}>{props.datos.nombre} </Text>
          <Text style={styles.description}>{props.datos.descripcion}</Text>
          <Text style={styles.precio}>Precio:${props.datos.precio}</Text>
        </View>
        <View>
          <Button  title="Agregar" onPress={() => agregarCarrito(props.datos)} />
        </View> 

      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  card: {
    width: "98%",
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  descripcionContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
  },
  precio: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  imagen: {
    width: 122,
    height: 120,
  },
  btn: {
    textAlign: "center",
    justifyContent:"center"
  },
});
