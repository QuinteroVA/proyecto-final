
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as FileSystem from 'expo-file-system'

export default function Targeta(props) {

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [url, setUrl] = useState("");
  const [carrito, setCarrito] = useState([]);




  const cantidadMaxima = 5;

  useEffect(() => {
    const totalCantidadProductos = carrito.reduce(
      (total, producto) => total + producto.cantidad,
      0
    );
    if (totalCantidadProductos > cantidadMaxima) {
      Alert.alert(
        "Error",
        `No puedes agregar más de ${cantidadMaxima} productos.`
      );
    }
    // console.log(carrito)
  }, [carrito]);


  function agregarAlCarrito(titulo, precio) {
    const nuevoProducto = {
      nombre: props.datos.nombre,
      descripcion: props.datos.descripcion,
      precio: props.datos.precio,
      url: props.datos.imagen,
      cantidad: 1,

    };



    const nuevoCarrito = [...carrito, nuevoProducto];

    // Actualiza el estado del carrito con la nueva copia
    setCarrito(nuevoCarrito);

    // Guarda el carrito actualizado en el almacenamiento
    guardarProducto(nuevoCarrito);
  }


  console.log(carrito)

  const guardarProducto = async (productos) => {
    try {
      const archivo = `${FileSystem.documentDirectory}Productos.json`;

      await FileSystem.writeAsStringAsync(archivo, JSON.stringify(productos), {});

      console.log('datos guardados');
    } catch (error) {
      console.log(error);
    }
  }


  // const mensaje = () => { Alert.alert("Producto", "Se Agregado  el producto")}

  // console.log(props);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.card}>
          <Image source={{ uri: props.datos.imagen }} style={styles.imagen} resizeMode="contain" />
        </View>
        <TouchableOpacity>
          <View>
            <Text style={styles.titulo}>{props.datos.nombre} </Text>

            <Text style={styles.description}>{props.datos.descripcion}</Text>
            <Text style={styles.precio}>Precio:${props.datos.precio}</Text>
            <View>
              <Button title="Agregar" onPress={() => agregarAlCarrito(props.datos.nombre, props.datos.precio)} />
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
        </TouchableOpacity>
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
    justifyContent: "center",
  },
});
