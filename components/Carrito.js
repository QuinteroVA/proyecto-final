import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import React, { useState } from "react";
export default function Carrito(props) {
  const [num1, setnum1] = useState(0);
  function aumentar() {
    if (num1 < 10) {
      setnum1(num1 + 1);
    } else
      Alert.alert(
        "Advertencia",
        "No se permite seleccionar más de 10 productos iguales"
      );
  }
  function disminur() {
    if (num1 > 0) {
      setnum1(num1 - 1);
    }
  }
  function borrarProducto() {
    setnum1(0);
  }

  function hacerCompra() {
    Alert.alert("Compra realizada", `Has comprado ${num1} productos`);
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
        <View style={{ alignItems: "center" }}>
          <Text style={styles.items}>{num1}</Text>
          <View style={styles.buttonsContainer}>
            <Button title="-" onPress={() => disminur()} />
            <Text> </Text>
            <Button title="+" onPress={() => aumentar()} /> 
          </View>
          <View style={styles. btnContenedorBorrar}>
                <Button title="Borrar" onPress={borrarProducto} />
                <Button title="Hacer compra" onPress={hacerCompra} />
            </View>
        </View>
      </View>
   
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    marginBottom: 15,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    borderColor: "#0068f0",
    borderRadius: 5,
    paddingHorizontal: 19,
  },
  imagen: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    width: "40%",
    alignItems: "center",
    padding: 10,
  },
  infoContainer: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 0,
    paddingTop: 3,
  },
  btnContenedorBorrar: {
    justifyContent: "space-between",
    marginTop: 10,

},

});
