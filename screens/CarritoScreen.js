import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RopaJSON from "../assets/data/Ropa.json";
import Targeta from "../components/Targeta";

import Carrito from "../components/Carrito";
export default function CarritoScreen() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const calcularTotal = () => {
    return carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
  };
  const calcularIVA = () => {
    return calcularTotal() * 0.16;
  };
  const calcularTotalAPagar = () => {
    return calcularTotal() + calcularIVA();
  };
  const confirmarCompra = () => {
    setMostrarModal(true);
  };

  const realizarCompra = () => {
    mensaje2();
    setCarrito([]);
    setMostrarModal(false);
  };

  useEffect(() => {
    if (mostrarModal) {
      const timer = setTimeout(() => {
        setMostrarModal(false);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [mostrarModal]);

  const eliminarProducto = (producto) => {
    const nuevoCarrito = carrito.filter(
      (item) => item.nombre !== producto.nombre
    );
    setCarrito(nuevoCarrito);
  };

  const ajustarCantidad = (producto, cantidad) => {
    const nuevoCarrito = carrito.map((item) => {
      if (item.nombre === producto.nombre) {
        return { ...item, cantidad: cantidad };
      }
      return item;
    });
    setCarrito(nuevoCarrito);
  };

  const mensaje = () => {
    Alert.alert("Mensaje", "Compra cancelada");
  };
  const mensaje2 = () => {
    Alert.alert("Mensaje", "Compra realizada con éxito");
  };
  function reiniciar() {
    //setdatos({})
    Alert.alert("Mensaje", "Compra cancelada", [
      { text: "Cancelar" },
      {
        text: "Confirmar",
        onPress: () => setdatos({}),
      },
    ]);
  }

  const [datos, setdatos] = useState(RopaJSON.productos);

  //const datos = RopaJSON.productos
  return (
    <View style={styles.container}>
      <View style={styles.card}></View>
      <Text style={[styles.titulo, { color: "#b05e9ac2" }]}>
        Carrito de Compras
      </Text>
      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <Carrito
            datos={item}
            onDelete={() => eliminarProducto(item)}
            onAdjust={(cantidad) => ajustarCantidad(item, cantidad)}
          />
        )}
        keyExtractor={(item) => item.nombre}
        numColumns={1}
      />
      <View style={styles.line}></View>
      <View style={styles.lowerSection}>
        <TouchableOpacity style={styles.btn1} onPress={() => setCarrito([])}>
          <MaterialIcons
            name="remove-shopping-cart"
            size={24}
            style={styles.icon}
          />
          <Text style={styles.txt2}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn1} onPress={confirmarCompra}>
          <MaterialCommunityIcons
            name="basket-check-outline"
            size={24}
            style={styles.icon}
          />
          <Text style={styles.txt2}>Comprar</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={mostrarModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Resumen de la Compra</Text>
          <FlatList
            data={carrito}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text>{item.nombre}</Text>
                <Text>Cantidad: {item.cantidad}</Text>
                <Text>Subtotal: ${item.cantidad * item.precio}</Text>
              </View>
            )}
            keyExtractor={(item) => item.nombre}
          />
          <View style={styles.resumenContainer}>
            <Text>Total: ${calcularTotal()}</Text>
            <Text>IVA (16%): ${calcularIVA()}</Text>
            <Text style={styles.totalAPagar}>
              Total a Pagar: ${calcularTotalAPagar()}
            </Text>
          </View>
          <View style={styles.botonesContainer}>
            <TouchableOpacity
              style={styles.btnConfirmar}
              onPress={realizarCompra}
            >
              <Text style={styles.btnTexto}>Confirmar Compra</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnCancelar}
              onPress={() => setMostrarModal(false)}
            >
              <Text style={styles.btnTexto}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    alignItems: "center",
    paddingHorizontal: 5,
    backgroundColor: "#f4f4f4",
  },
  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  lowerSection: {
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  btn1: {
    margin: 10,
    padding: 10,
    elevation: 5,
    borderRadius: 18,
    shadowColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0068f0",
  },
  txt2: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    justifyContent: "space-between",
    borderEndEndRadius: 50,
  },
  line: {
    width: "96%",
    marginTop: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "#0068f0",
  },
  icon: {
    color: "white",
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    padding: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(183, 197, 202, 0.448)",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 10,
  },
  resumenContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  btnTexto: {
    margin: 10,
    padding: 10,
    elevation: 5,
    borderRadius: 18,
    shadowColor: "#ffffff",
    alignItems: "center",
    backgroundColor: "#0068f0",
  },
});
