import { View, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function index() {
  return (
    <View style={styles.boxLogo}>
      <Image style={styles.logo} source={require('../../assets/nubank-logo-branco.png')}> 
      </Image>
    </View>
  )
}