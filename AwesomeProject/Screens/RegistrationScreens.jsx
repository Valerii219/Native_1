import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  
} from "react-native";

const RegistrationScreens = () => {
  const [name, setName] = useState("");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <ImageBackground
        source={require("../Image/bgImage.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.back}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text
              
              styles={styles.title}
            >
              Реєстрація
            </Text>
            <KeyboardAvoidingView
                behavior={Platform.OS == "android" ? "height" : "padding"}
              >
            <TextInput
              style={[styles.inputs, styles.firstInputs]}
              autoFocus={true}
              keyboardType="default"
              placeholder="Логін"
              textAlign="left"
              placeholderTextColor={"#bdbdbd"}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.inputs}
              autoFocus={true}
              keyboardType="default"
              placeholder="Адреса електроної пошти"
              textAlign="left"
              placeholderTextColor={"#bdbdbd"}
                value={email}
                  onChangeText={setEmail}

            />
            <TextInput
              style={[styles.inputs, styles.lastInputs]}
              autoFocus={true}
              keyboardType="default"
              placeholder="Пароль"
              textAlign="left"
              placeholderTextColor={"#bdbdbd"}
              secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
            /></KeyboardAvoidingView>
            <TouchableOpacity style={styles.button} >
              <Text style={styles.sign}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.enter}>
              Вже є акаунт?
              <TouchableOpacity style={styles.isAccount}>
                <Text style={styles.enter}>Увійти</Text>
              </TouchableOpacity>
            </Text>
          </View>
          </TouchableWithoutFeedback>
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
  back: {
    flex: 1,
    height: 549,
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
    justifyContent: "center",
  },
  div: {
    // flex:1,
  },
  inputs: {
    backgroundColor: "#e8e8e8",
    marginBottom: 16,
    width: 343,
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
  title:{color: "#212121",
  fontFamily: "Roboto-Medium",
  fontSize: 30},
  

  button: {
    width: 343,
    height: 51,
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
  isAccount:{
marginTop:16,
 marginLeft:4,
  },
  enter:{
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color:'#1B4371',
   
  },
});

export default RegistrationScreens;
