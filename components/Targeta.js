import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";

export default function Targeta(props) {
  console.log(props.datos.nombre);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      
        <View style={styles.card}>
          <Image source={{ uri: props.datos.imagen }} 
          style={styles.imagen}
          resizeMode='contain'
          />
          
        </View>
        <Text style={styles.title}>{props.datos.nombre} </Text>
        <View>
        <Text style={styles.description}>{props.datos.descripcion}</Text>
        <Text style={styles.price}>Precio:${props.datos.precio}</Text>
        </View>  
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    card: {
        width: "98%",
        padding: 10,
        marginBottom: 10,
        alignItems: "center",
      },
    imageContainer: {
      alignItems: "center",
    },
    title: {
      fontSize: 18,
      textAlign: "center",
      marginTop: 10,
      paddingHorizontal: 10,
    },
    descriptionContainer: {
      marginTop: 10,
      alignItems: "center",
    },
    description: {
      fontSize: 14,
      textAlign: "center",
    },
    price: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 5,
    },
    imagen: {
      width: 122,
      height: 120,
    },
  });