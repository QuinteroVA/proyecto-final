import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt1}>Iniciar Sesión</Text>
        <Image source={{ uri: ("https://drive.google.com/uc?export=view&id=1_60IjHQDosiyzTl05YyB5VvxXHgiHKl_") }}
          style={styles.img} />
        <Text style={styles.txt1}>Store Dress</Text>
      </View>

      {/* Parte Central */}
      <View style={styles.middleSection}>
        {/* Inputs para Usuario y Contraseña */}
        <TextInput
          placeholder="Usuario"
          style={styles.input}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.loginButton} onPress={() => {
            // Lógica para iniciar sesión
          }}
        >
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // Lógica para recuperar contraseña
          }}
        >
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      {/* Parte Inferior */}
      <View style={styles.lowerSection}>
        <TouchableOpacity style={styles.socialButton}>
          {/* Icono para iniciar sesión con red social */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          {/* Icono para iniciar sesión con red social */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          {/* Icono para iniciar sesión con red social */}
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  txt1: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#0068f0'
},

  img: {
    height: 150,
    width: 230,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'contain',
},
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  middleSection: {
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#0068f0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#0068f0',
    textAlign: 'center',
  },
  lowerSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  socialButton: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#ddd',
  },
});