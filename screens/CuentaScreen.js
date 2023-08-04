import { View, Text, StyleSheet } from "react-native";
import React from "react";
//  icono s
import Icon from "react-native-vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function CuentaScreen({ usuario }) {
  const nombre = usuario?.nombre || "Nino";
  const correo = usuario?.correo || "AQUINTERO@hotmail.com";

  return (
    <View style={styles.container}>
      <View style={styles.opcionesContainer1}>
        <SimpleLineIcons name="user-following" size={24} color="black" />
        <Text style={styles.nombreUsuario}>{nombre}</Text>
        <Text style={styles.correoElectronico}>{correo}</Text>
      </View>

      <View style={styles.opcionesContainer}>
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
            <View style={styles.iconTextContainer}>
              <AntDesign name="mail" size={30} color="black" />
              <Text style={styles.iconTexto}>cupones</Text>
            </View>
            <View style={styles.iconTextContainer}>
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
            <View >
              <Icon name="cog" size={30} color="black" />
              <Text style={styles.iconTexto}>ajustes</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <AntDesign name="phone" size={30} color="black" />
              <Text style={styles.iconTexto}>telefono</Text>
            </View>
            <View >
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nombreUsuario: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  correoElectronico: {
    fontSize: 18,
    color: "gray",
  },
  opcionesContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  opcionesContainer1: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  opcion: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#ffffff",
    width: "95%",
    height: 130,
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  opcionTexto: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
});
