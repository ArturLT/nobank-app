import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/Logo'
import Form from './src/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Logo/>
      <Text style={styles.text}>Olá, Felipe Melo</Text>
      <Form/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B03BB',
    
  },
  text:{
    fontSize:20,
    color: '#FFFF',
    margin: 30,
  }
});
