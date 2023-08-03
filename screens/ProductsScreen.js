import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react'
import RopaJSON from "../assets/data/Ropa.json"
import Targeta from '../components/Targeta'

export default function ProductsScreen() {
  return (
    <View>
      <Text>MODA</Text>
      <FlatList
      data={RopaJSON.productos}
      
       renderItem={({item})  =>(
              <Targeta datos={item}/>

       )}  
       numColumns={2}    
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
