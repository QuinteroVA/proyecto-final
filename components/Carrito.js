import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';
export default function Carrito(props) {
  const [num1, setnum1] = useState(0)
  function aumentar() {
    if (num1 < 10) { setnum1(num1 + 1); }
    else { Alert.alert('Advertencia', 'No se permite seleccionar más de 10 productos iguales') }
  }
  function disminur() {
    if (num1 > 0) { setnum1(num1 - 1); }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: props.datos.imagen }}
          style={styles.imagen}
          resizeMode="contain"
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoTextContainer}>
          <Text style={styles.titulo}>{props.datos.nombre} </Text>
          <Text style={styles.description}>{props.datos.descripcion}</Text>
          <Text style={styles.price}>Precio: ${props.datos.precio}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.items}>{num1}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.btn1} onPress={() => disminur()}>
              <Feather name="minus" size={15} style={styles.icon} />
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity style={styles.btn1} onPress={() => aumentar()}>
              <Feather name="plus" size={15} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 6,
    marginBottom: 15,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 5,
  },
  infoTextContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
  items: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#0068f0',
    borderRadius: 5,
    paddingHorizontal: 20
  },
  imagen: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    width: "40%",
    alignItems: "center",
    paddingVertical: 5,
  },
  infoContainer: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingTop: 3,
  },
  btn1: {
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: 8,
    backgroundColor: '#0068f0',
    shadowColor: 'gray',
    elevation: 5,
    margin: 1.2,
  },
  txt2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    color: 'white',
  }
});