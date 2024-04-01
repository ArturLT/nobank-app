import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

export default function index() {
  return (
  
  
    <View>
        <View>
            <TextInput style={styles.input}>
                Procurar...
             </TextInput>
        </View>

        <View style={styles.form}>
            <Text style={styles.text1}>Cartão de crédito</Text>
            <Text style={styles.text2}>Fatura</Text>
            <Text style={styles.text3}>R$ 1.500,00</Text>
            
            <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Pagar Fatura</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.form}>
            <Text style={styles.text1}>Conta</Text>
            <Text style={styles.text2}>Saldo disponível</Text>
            <Text style={styles.text5}>R$ 300,00</Text>
            
            <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Transferir</Text>
        </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.boto}>
        <Text style={styles.botoText}>Meus Cartões</Text>
        </TouchableOpacity>
    </View>
  )
}