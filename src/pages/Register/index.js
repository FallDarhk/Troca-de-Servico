import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { Ionicons } from '@expo/vector-icons'

const schema = yup.object({
  username: yup.string().required("Informe se username"),
  email: yup.string().email("Email Invalido").required("Informe seu email"),
  password: yup.string().min(6, "A senha deve ter ao minimo 6 digitos").required("Informe sua senha")
})

export default function Register() {
  const { control, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const [hidePass, setHidePass] = useState(true);
  
  function handleSignIn(data){
    console.log(data)
  }

  return (
    <View style={styles.container}>
      
      <Animatable.View delay={500} animation="fadeInLeft" style={styles.containerHeader}>
        <Text style={styles.message}> Vamos lá!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        {/* Criar um componente para o controler para reutiliza-lo de forma limpa */}
        <Text style={styles.title}>Nome</Text>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value} }) => (
            <TextInput
              style={[
                styles.input, {
                  borderWidth: errors.username && 1,
                  borderColor: errors.username && '#ff375b'
                }]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Seu nome de usuario"
            />
          )}
        />
        {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}

        <Text style={styles.title}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value} }) => (
            <TextInput
              style={[
              styles.input, {
                borderWidth: errors.email && 1,
                borderColor: errors.email && '#ff375b'
              }]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Digite seu email"
            />
          )}
        />
        {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}
        
        <Text style={styles.title}>Senha</Text>
        <View style={styles.iconRow}>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value} }) => ([
              
              <TextInput
                style={[
                styles.inputPassword, {
                  borderWidth: errors.password && 1,
                  borderColor: errors.password && '#ff375b'
                }]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="A sua senha"
                secureTextEntry={hidePass}
              />,
              <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass)}>
                <Ionicons name="eye" color="#000000" size={25}/>
              </TouchableOpacity>
              ])}
          />
          {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
          <Text style={styles.buttonText}>Cadastrar-se</Text>
        </TouchableOpacity>

      </Animatable.View>
      

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F567B3'
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm:{
    backgroundColor: '#fff',
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 20,
    marginTop:28,
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button:{
    backgroundColor: '#F567B3',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  labelError:{
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8
  },
  iconRow:{
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inputPassword:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    width: '90%'
  },
  icon:{
    width: '15%',
    height: 40,
    alignItems: 'center',
  }
})