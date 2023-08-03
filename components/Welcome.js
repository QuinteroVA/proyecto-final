import { View, Text, StyleSheet, Image, TouchableOpacity, Icon } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 

export default function Welcome({navigation}) {
    return (
        <View>
            <Text style={styles.txt1}>Bienvenido</Text>
            <Image source={{ uri: ("https://drive.google.com/uc?export=view&id=1_60IjHQDosiyzTl05YyB5VvxXHgiHKl_")}}
                style={styles.img} />
            <Text style={styles.txt1}>Store Dress</Text>
            <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('Login')}>
                <AntDesign name="login" size={24} style={styles.icon}/>
                <Text style={styles.txt2}>Iniciar Sesión</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('Registrarse')}>
                <SimpleLineIcons name="note" size={24} style={styles.icon}/>
                <Text style={styles.txt2}>Registrarse</Text></TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    txt1: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#0068f0'
    },
    img: {
        height: 200,
        width: 300,
        borderRadius: 15,
        marginBottom: 20,
    },
    btn1: {
        borderWidth: 1,
        backgroundColor: '#0068f0',
        marginBottom: 15,
        padding: 15,
        borderRadius: 20,
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
        justifyContent:'space-between'
    },
    icon: {
        marginRight: 10,
        color:'white',
    }
});