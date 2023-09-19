import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
// import LoginScreen from './Screens/LoginScreen';
import RegistrationScreens from "./Screens/RegistrationScreens";

import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../AwesomeProject/assets/fonts/roboto-black.otf"),
  });
  return (
    <View style={styles.container}>
      {/* <LoginScreen/> */}
      <RegistrationScreens />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
