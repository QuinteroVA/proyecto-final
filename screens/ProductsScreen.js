import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react';
import RopaJSON from "../assets/data/Ropa.json"
import Targeta from '../components/Targeta'
export default function ProductsScreen({navigation}) {
  const [seleccionado, setSeleccionado] = useState([]);
  const seleccionar = (product) => {
    setSeleccionado([...seleccionado, product]);
  };
  return (
    <View>
      <Text></Text>
      <Text style={[styles.titulo, { color: '#b05e9ac2' }]}>MODA</Text>
      <FlatList
        data={RopaJSON.productos}
        renderItem={({ item }) => (
          <Targeta datos={item} onSelect={seleccionar}/>
        )}
        numColumns={2}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 24,
    backgroundColor: '#f4f4f4',
  },
  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});