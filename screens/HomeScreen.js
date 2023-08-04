import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import sliderJSON from '../assets/data/SliderImg.json';
import ProductsScreen from './ProductsScreen';
const width = Dimensions.get('window').width;
export default function LoginScreen({ navigation }) {
  const [imagenesSLD, setImagenesSLD] = useState(sliderJSON.imagenes || []);
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Text style={styles.txt1}>Store Dress</Text>
        <Swiper style={[styles.swiperContainer]}>
          {imagenesSLD.map((item, index) => (
            <View key={index} style={[styles.slide]}>
              <Image source={{ uri: item.url }} style={styles.img} />
              <Text style={styles.txt2}>{item.des}</Text>
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.txt1}>Tienda</Text>
        <Text multiline={true} style={styles.txt2}>Store Dress es mucho más que una tienda de ropa.
          Es un destino de moda completo que se destaca por su amplia selección,
          atención al cliente excepcional y servicios de personalización.
          Si buscas moda y estilo, no busques más, ven a Store Dress.</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.lowerSection}>  
          <TouchableOpacity onPress={() => navigation.navigate('Productos')}>
            <Image source={{ uri: ("https://drive.google.com/uc?export=view&id=12uubJ2f6BSrnX1ELDNMhF8KZsKHnnz1Q") }}
              style={styles.img2} /><Text style={styles.txt2}>Promociones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent:'center'}} onPress={() => navigation.navigate('Productos')}>
            <Image source={{ uri: ("https://drive.google.com/uc?export=view&id=1GlWI_rqcn67lainGYkgx-FX9Xnouidx_") }}
              style={styles.img2} /><Text style={styles.txt2}>Descuentos</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 0.8,
  },
  txt1: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0068f0'
  },
  txt2: {
    color: '#0068f0',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  middleSection: {
    padding: 10,
    margin: 10,
    justifyContent: 'center'
  },
  line: {
    borderWidth: 1,
    width: '70%',
    marginBottom: 20,
    borderColor: '#0068f0'
  },
  slide: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: 'contain',
  },
  lowerSection: {
    backgroundColor: '#9e9e9e4d',
    borderRadius: 15,
    flexDirection: 'row',
  },
  img2: {
    width: 60,
    height: 60,
    margin: 40,
    marginBottom: 5,
    marginTop: 5,
  },
});