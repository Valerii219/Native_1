import { Text, TouchableOpacity, View } from "react-native";
import {  StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
export default function CreatePostsScreen() {
    return (
      <View style={ styles.container }>
        <View style={styles.back}><View style={styles.elipse}><Ionicons name="camera-outline" size={24} color="#bdbdbd" /></View></View>
        <Text style={styles.text}>Завантажте фото</Text>
        <TextInput
                style={styles.inputs}
                
                placeholder="Назва"
                textAlign="left"
                placeholderTextColor={"#bdbdbd"}
               
              />
              <TextInput
              style={styles.inputs}
                placeholder="Місцевість"
                textAlign="left"
                placeholderTextColor={"#bdbdbd"}
              
              />
              <TouchableOpacity style={styles.button} >
                <Text style={styles.enter}>Опублікувати</Text>
              </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        // justifyContent: "center", 
        // alignItems: "center"
       
      },
    back: {
        height: 240,
        width: 343,
        position: "absolute", 
        top:0,
        marginTop:32,
        backgroundColor: "#e8e8e8",
        zIndex: 100,
        overflow: "hidden",
    alignItems: "center", 
    justifyContent: "center", 
      },
      elipse:{
        height: 60,
        width: 60,
        position: "absolute", 
        backgroundColor: "white",
        borderRadius:50,
        alignItems: "center", 
        justifyContent: "center", 
      },
      inputs: {
        backgroundColor: "#e8e8e8",
        minWidth: "90vw",
        height: "6vh",
        borderRadius: 8,
        placeholder: "green",
        padding: 16,
        // marginTop:32,
      },
      enter: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: "#1B4371",
        marginTop: 16,
      },
      button: {
        minWidth: "90%",
        height: "7%",
        backgroundColor: "#ff6c00",
        borderRadius: 100,
        alignItems: "center", 
        marginTop:32,
        // justifyContent: "center", 

      },
    //   text:{
        
    //   }
    
  });