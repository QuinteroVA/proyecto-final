import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function CuentaScreen({ usuario }) {
  return (
    <View style={styles.container}>
    <Text style={styles.nombreUsuario}>{usuario.nombre}</Text>
    <Text style={styles.correoElectronico}>{usuario.correo}</Text>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nombreUsuario: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  correoElectronico: {
    fontSize: 18,
    color: 'gray',
  },
});