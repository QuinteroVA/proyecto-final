import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import sliderJSON from '../assets/data/SliderImg.json';

const width = Dimensions.get('window').width;
const carruselHeight = 2;

export default function LoginScreen({ navigation }) {
  const [imagenesSLD, setImagenesSLD] = useState(sliderJSON.imagenes || []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt1}>Store Dress</Text>
        <Swiper style={[styles.swiperContainer, { height: width * carruselHeight }]}>
          {imagenesSLD.map((imagen, index) => (
            <View key={index} style={[styles.slide, { height: width * carruselHeight }]}>
              <Image source={{ uri: imagen.url }} style={styles.img} resizeMode="cover" />
            </View>
          ))}
        </Swiper>
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
    color: '#0068f0'
  },
  middleSection: {
    padding: 20,
    justifyContent: 'center'
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
    resizeMode: 'cover'
  },
});