import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Button } from "react-native";
import React from "react";
export default function Carrito(props) {
    const mensaje = () => {
        Alert.alert("Producto", "Se Agregado  el producto")
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: props.datos.imagen }}
                    style={styles.imagen}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoTextContainer}>
                    <Text style={styles.titulo}>{props.datos.nombre} </Text>
                    <Text style={styles.description}>{props.datos.descripcion}</Text>
                    <Text style={styles.precio}>Precio: ${props.datos.precio}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button title="-" onPress={mensaje} />
                    <Button title="+" onPress={mensaje} />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 6,
        marginBottom: 15,
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 8,
        elevation: 5,
    },
    imageContainer: {
        alignItems: "center",
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    infoTextContainer: {
        flex: 1,
    },
    titulo: {
        fontSize: 16,
        fontWeight: "bold",
    },
    description: {
        fontSize: 14,
    },
    precio: {
        fontSize: 14,
        fontWeight: "bold",
    },
    imagen: {
        width: 100,
        height: 100,
    },
    imageContainer: {
        width: "40%",
        alignItems: "center",
        padding: 10,
    },
    infoContainer: {
        width: "60%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: "row",

    },
});