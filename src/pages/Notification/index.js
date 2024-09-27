import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Notification() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Notification</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold',
  }
})