import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RopaJSON from "../assets/data/Ropa.json"
import Carrito from '../components/Carrito'
export default function ProductsScreen() {
  const [num1, setnum1] = useState(0)
  const mensaje = () => { Alert.alert('Mensaje', 'Compra cancelada') }
  const mensaje2 = () => { Alert.alert('Mensaje', 'Compra realizada con éxito') }
  function reiniciar() {

    //setdatos({})
    Alert.alert('Mensaje', 'Compra cancelada', [
      { text: 'Cancelar' },
      {
        text: 'Confirmar',
        onPress: () => setdatos({})
      }
    ])

  }

  const [datos, setdatos] = useState(RopaJSON.productos)

  //const datos = RopaJSON.productos
  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, { color: '#b05e9ac2' }]}>Carrito de Compras</Text>
      <FlatList

        data={datos}
        renderItem={({ item }) => (
          <Carrito datos={item} />
        )}
        numColumns={1}
      />
      <View style={styles.line}></View>
      <View style={styles.lowerSection}>
        <TouchableOpacity style={styles.btn1} onPress={() => reiniciar()}>
          <MaterialIcons name="remove-shopping-cart" size={24} style={styles.icon} />
          <Text style={styles.txt2}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn1} onPress={mensaje2}>
          <MaterialCommunityIcons name="basket-check-outline" size={24} style={styles.icon} />
          <Text style={styles.txt2}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: '#f4f4f4',
  },
  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  lowerSection: {
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn1: {
    margin: 10,
    padding: 10,
    elevation: 5,
    borderRadius: 18,
    shadowColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0068f0',
  },
  txt2: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'space-between'
  },
  line: {
    width: '96%',
    marginTop: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#0068f0'
  },
  icon: {
    color: 'white',
    marginRight: 10,
  }
});