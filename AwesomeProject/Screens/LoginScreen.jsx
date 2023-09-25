import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const onLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail(""); 
    setPassword(""); 

    navigation.navigate("Home");
  };
  return (
    <>
      <ImageBackground
        source={require("../Image/bgImage.jpg")}
        style={styles.imageBackground}
      >
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={styles.back}>
          <View style={styles.container}>
            <Text
              style={styles.title}
            >
              Увійти
            </Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "android" ? "height" : "padding"}
            >
              <TextInput
                style={[styles.inputs, styles.firstInputs]}
                keyboardType="default"
                placeholder="Адреса електроної пошти"
                textAlign="left"
                placeholderTextColor={"#bdbdbd"}
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={[styles.inputs, styles.lastInputs]}
                keyboardType="default"
                placeholder="Пароль"
                textAlign="left"
                placeholderTextColor={"#bdbdbd"}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.button} onPress={onLogin}>
              <Text style={styles.sign}>Увійти</Text>
            </TouchableOpacity>

            <Text style={styles.enter}>
              Немає акаунту?
              <TouchableOpacity style={styles.isAccount} onPress={() => navigation.navigate("Registration")}>
                <Text style={styles.enter}>Зареєструватися</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
        {/* </TouchableWithoutFeedback> */}
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  back: {
    flex: 1,
    height: 489,
    width: "100%",
    position: "absolute", // Для розміщення зображення поверх інших
    bottom: 0, // Зміщення вгору
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    zIndex: 100,
    overflow: "hidden",
    
  },
  container: {
    flex: 1,
    alignItems: "center",
  },

  inputs: {
    backgroundColor: "#e8e8e8",
    marginBottom: 16,
    minWidth: "90vw",
    height: "6vh",
    borderRadius: 8,
    placeholder: "green",
    padding: 16,
  },
  firstInputs: {
    marginTop: 32,
  },
  lastInputs: {
    marginBottom: 43,
  },
  title: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    marginTop:32,
    
  },
  button: {
    minWidth: "90%",
    height: "10%",
    backgroundColor: "#ff6c00",
    borderRadius: 100,
  },
  sign: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#ffffff",
    marginTop: 15,
  },
  isAccount: {
    marginTop: 16,
    marginLeft: 4,
  },
  enter: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
    marginTop: 16,
  },
});

export default LoginScreen;
