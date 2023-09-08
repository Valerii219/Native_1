import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, ImageBackground } from 'react-native';

const RegistrationScreens = () => {
  return (
    <>
      <ImageBackground source={require('../Image/bgImage.jpg')} style={styles.imageBackground}>
      <View style={styles.back}>
        <View style={styles.container}>
          <Text style={styles.title}>Реєстрація</Text>
            <TextInput style={styles.inputs} autoFocus={true} keyboardType='default' placeholder textAlign='left' />
            <TextInput style={styles.inputs} autoFocus={true} keyboardType='default' placeholder textAlign='left' />
            <TextInput style={styles.inputs} autoFocus={true} keyboardType='default' placeholder textAlign='left' />
            <Button title="Зареєструватися" />
            <Text style={styles.title}>Вже є акаунт  <Button title="Увійти" /></Text>
            </View>
        </View>
      
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  back: {
    flex:1,
    height:549,
    width:'100%',
    position: 'absolute', // Для розміщення зображення поверх інших
    bottom: 0, // Зміщення вгору
    backgroundColor:'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    zIndex:100,
    overflow: 'hidden',
  
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  div: {
    // flex:1,
   },
  inputs: {
    backgroundColor: 'grey',
    
  },
  title: {
    // Додайте стилі для заголовку, якщо потрібно
  },
});

export default RegistrationScreens;