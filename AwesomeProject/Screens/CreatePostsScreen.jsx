import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
export default function CreatePostsScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.back}>
      <View style={styles.containers}>
      <Camera
        style={styles.camera}
        type={type}
        ref={setCameraRef}
      >
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
          
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
              }
            }}
          >
            <View style={styles.takePhotoOut}>
            <View style={styles.elipse}>
          <Ionicons name="camera-outline" size={24} color="#bdbdbd" />
        </View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
        
      </View>
      <View style={styles.inputsView}>
        <Text style={styles.text}>Завантажте фото</Text>
        <TextInput
          style={[styles.inputs, styles.firstInputs]}
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.enter}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    height: 240,
    width: 343,
    position: "absolute",
    top: 0,
    marginTop: 32,
    backgroundColor: "#e8e8e8",
    zIndex: 100,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  elipse: {
    height: 60,
    width: 60,
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  containers: { flex: 1 },
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  inputsView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    bottom: 111,
  },
  firstInputs: {
    marginBottom: 16,
  },

  inputs: {
    backgroundColor: "#e8e8e8",
    minWidth: "90vw",
    height: "6vh",
    borderRadius: 8,
    placeholder: "green",
    padding: 16,
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
    marginTop: 32,
    // justifyContent: "center",
  },
  text: {
    marginBottom: 32,
  },
  flipContainer: {
    flex: 0.1,
    alignSelf: "center",
  },

  buttons: { alignSelf: "center" },

  takePhotoOut: {
    height: 50,
    width: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    top:-100,
  },

 
});
