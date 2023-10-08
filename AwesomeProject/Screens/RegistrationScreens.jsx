import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

const RegistrationScreens = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <ImageBackground
        source={require("../Image/bgImage.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.back}>
          {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            <View style={styles.container}>
              <Text styles={styles.title}>Реєстрація</Text>
              <KeyboardAvoidingView
                behavior={Platform.OS == "android" ? "height" : "padding"}
              >
                <TextInput
                  style={[styles.inputs, styles.firstInputs]}
                  keyboardType="default"
                  placeholder="Логін"
                  textAlign="left"
                  placeholderTextColor={"#bdbdbd"}
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  style={styles.inputs}
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
                <Text style={styles.sign}>Зареєструватися</Text>
              </TouchableOpacity>
              <Text style={styles.enter}>
                Вже є акаунт?
                <TouchableOpacity
                  style={styles.isAccount}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.enter}>Увійти</Text>
                </TouchableOpacity>
              </Text>
            </View>
          {/* </TouchableWithoutFeedback> */}
        </View>

        <View style={styles.photo}>
          <TouchableOpacity style={styles.plus}>
            <Text style={styles.plusPlus}>+</Text>
          </TouchableOpacity>
        </View>
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
  title: { color: "#212121", fontFamily: "Roboto-Medium", fontSize: 30 },
  back: {
    flex: 1,
    height: "60%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    zIndex: 100,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  inputs: {
    backgroundColor: "#e8e8e8",
    marginBottom: 16,
    minWidth: "90vw",
    height: 50,
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

  button: {
    minWidth: "90%",
    height: "6vh",
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
  },
  photo: {
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    position: "fixed",
    zIndex: 1300,
    borderRadius: 16,
    top: "30%",
    left: "50%",
    transform: [{ translateX: -60 }],
  },
  plus: {
    position: "absolute",
    bottom: 10,
    right: -10,
    borderWidth: 2,
    borderColor: "orange",
    width: 25,
    height: 25,
    borderRadius: "50%",
    textAlign: "center",
  },
  plusPlus: {
    position: "absolute",
    color: "orange",
    fontSize: 24,
    top:-8,
    left:3.5,
  },
});

export default RegistrationScreens;
