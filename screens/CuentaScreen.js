import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
//  iconos
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
export default function CuentaScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const mensaje = () => { Alert.alert('Mensaje', 'Sesión Finalizada') }

  const datos = async () => {
    try {
      const usuarioGuardado = await AsyncStorage.getItem("loggedUsername");
      const corroGuardado = await AsyncStorage.getItem("loggedEmail");
      setUsername(usuarioGuardado);
      setEmail(corroGuardado);
    } catch (error) {
      console.error("Error al obtener el nombre de usuario almacenado", error);
    }
  }; datos()
  
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={{ alignItems: 'left' }}>
          <SimpleLineIcons style={{ marginLeft: 20 }} name="user-following" size={24} color="black" />
        </View>
        <View>
          <Text style={styles.nombreUsuario}>{username}</Text>
          <Text style={styles.correoElectronico}>{email}</Text>
        </View>
      </View>

      <View

        style={styles.opcionesContainer}>
        <View style={styles.opcion}>
          <View style={styles.iconContainer}>
            <Icon name="shopping-cart" size={30} color="black" />
            <Text style={styles.opcionTexto}>Compra</Text>
          </View>
          <View style={styles.iconContainer}>
            <AntDesign name="car" size={30} color="black" />
            <Text style={styles.opcionTexto}>Envío</Text>
          </View>
          <View style={styles.iconContainer}>
            <Fontisto name="suitcase-alt" size={30} color="black" />
            <Text style={styles.opcionTexto}>Pendientes de Envío</Text>
          </View>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="car-lifted-pickup"
              size={24}
              color="black"
            />
            <Text style={styles.opcionTexto}>Exportar</Text>
          </View>
        </View>
      </View>

      <View style={styles.opcionesContainer}>
        <View style={styles.opcion}>
          <Text style={styles.opcionTexto}>Pago y Descuentos</Text>
          <View style={styles.iconContainer}>
            <View >
              <Icon name="credit-card" size={30} color="black" />
              <Text style={styles.iconTexto}>targeta</Text>
            </View>
            <View >
              <AntDesign name="creditcard" size={30} color="black" />
              <Text style={styles.iconTexto}>cupones</Text>
            </View>
            <View >
              <AntDesign name="tago" size={30} color="black" />
              <Text style={styles.iconTexto}>pases</Text>
            </View>
            <View>
              <AntDesign name="rocket1" size={30} color="black" />
              <Text style={styles.iconTexto}>envios</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.opcionesContainer}>
        <View style={styles.opcion}>
          <Text style={styles.opcionTexto}>Entretenimiento</Text>
          <View style={styles.iconContainer}>
            <View >
              <Icon name="film" size={30} color="black" />
              <Text style={styles.iconTexto}>targeta</Text>
            </View>
            <View>
              <AntDesign name="mail" size={30} color="black" />
              <Text style={styles.iconTexto}>cupones</Text>
            </View>
            <View>
              <AntDesign name="tago" size={30} color="black" />
              <Text style={styles.iconTexto}>pases</Text>
            </View>
            <View >
              <AntDesign name="camerao" size={30} color="black" />
              <Text style={styles.iconTexto}>envios</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.opcionesContainer}>
        <View style={styles.opcion}>
          <Text style={styles.opcionTexto}> Servicios</Text>
          <View style={styles.iconContainer}>
            <View style={{ alignItems: 'center' }}>
              <Icon name="cog" size={30} color="black" />
              <Text style={styles.iconTexto}>ajustes</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <AntDesign name="phone" size={30} color="black" />
              <Text style={styles.iconTexto}>telefono</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <AntDesign name="questioncircleo" size={30} color="black" />
              <Text style={styles.iconTexto}>ayuda</Text>
            </View>
            <View >
              <AntDesign name="customerservice" size={30} color="black" />
              <Text style={styles.iconTexto}>call center</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.lowerSection}>
        <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('Welcome')}>
          <Entypo name="log-out" size={20} style={styles.icon} />
          <Text style={styles.txt2}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 5,
  },
  container2: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems:'center',

  },
  nombreUsuario: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft:100
  },
  correoElectronico: {
    fontSize: 18,
    color: "gray",
    marginRight: 20,
  },
  opcionesContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  opcion: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "#ffffff",
    width: "95%",
    height: 130,
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",

  },
  opcionTexto: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 8,

    color: '#0068f0'
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
    alignContent: 'center',
  },
  lowerSection: {
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn1: {
    margin: 8,
    padding: 8,
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
    marginTop: 8,
    borderWidth: 1,
    marginBottom: 8,
    borderColor: '#0068f0'
  },
  icon: {
    color: 'white',
    marginRight: 10,
  }
});
