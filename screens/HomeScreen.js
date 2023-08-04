import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import imagenes from '../assets/data/imagenes.json';
const width = Dimensions.get('window').width;
const carruselHeight = 0.5;
//import { AntDesign } from '@expo/vector-icons';
export default function LoginScreen({ navigation }) {
  const [imagenesData, setImagenesData] = useState(imagenes.imagenes || []);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.txt1}>Store Dress</Text>
        <Swiper style={[styles.swiperContainer, { height: width * carruselHeight }]}>
          {imagenesData.map((imagen, index) => (
            <View key={index} style={[styles.slide, { height: width * carruselHeight }]}>
              <Image source={{ uri: imagen.url }} style={styles.img} resizeMode="cover" />
            </View>
          ))}
        </Swiper>
        <Text style={styles.txt1}>Store Dress</Text>
        <Text style={styles.txt1}>Store Dress</Text>
        <Text style={styles.txt1}>Store Dress</Text>
        <Text style={styles.txt1}>Store Dress</Text>
      </View>
      <View style={styles.middleSection}>
        <TouchableOpacity>
          <Text style={styles.txtPass}></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
      <Text style={styles.txtPass}>Inicia Sesión con...</Text>
      <View style={styles.lowerSection}>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  txt1: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#0068f0'
  },
  middleSection: {
    padding: 20,
    justifyContent: 'center'
  },
  icon: {
    marginRight: 10,
    color: 'white'
  },
  btn1: {
    backgroundColor: '#0068f0',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: 'gray',
    elevation: 5,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  txt2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'space-between'
  },
  lowerSection: {
    backgroundColor: '#9e9e9e4d',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  line: {
    borderWidth: 1,
    width: '70%',
    marginBottom: 10,
    marginTop: 10,
    borderColor: '#0068f0'
  },
  swiperContainer: {
    width: width,
  },
  slide: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "80%",
    aspectRatio: 4 / 4,
    resizeMode: 'contain'
  },
});