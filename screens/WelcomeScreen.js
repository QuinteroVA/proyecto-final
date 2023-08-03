import { View, Text, StyleSheet, navigation } from 'react-native'
import React from 'react'
import Welcome from '../components/Welcome'

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Welcome navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});