import React from 'react'

import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/moeda.png')}
          style={{ width: '50%' }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp"style={styles.containerForm}>
        <Text style={styles.title}>Comece a realizar trocas de serviços agora mesmo!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={ () => navigation.navigate('SignIn')}  
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F567B3'
  },
  containerLogo:{
    flex:2,
    backgroundColor: '#F567B3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm:{
    flex:1,
    backgroundColor: '#F5A9DC',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 12
  },
  text:{
    color: '#3a3a3a'
  },
  button:{
    position: 'absolute',
    backgroundColor: '#F567B3',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})