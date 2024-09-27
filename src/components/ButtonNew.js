import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { Entypo } from "@expo/vector-icons";

export default function ButtonNew({ size, focused }) {
  return (
    <View style={[styles.container, { backgroundColor: focused ? '#F567B3' : '#FFA3D4' } ]}>
      <Entypo name="plus" color={ focused ? '#fff' : '#f9f9f9'} size={size}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    }
})