import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react'
import RopaJSON from "../assets/data/Ropa.json"
import Carrito from '../components/Carrito'
export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.titulo,{color:'#b05e9ac2'}]}>Carrito de Compras</Text>
      <FlatList
      data={RopaJSON.productos}
       renderItem={({item})  =>(
              <Carrito datos={item}/>
       )}  
       numColumns={1}    
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
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