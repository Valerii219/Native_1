import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet,  View } from "react-native";
import LoginScreen from './Screens/LoginScreen';

import RegistrationScreens from "./Screens/RegistrationScreens";
const MainStack = createStackNavigator();
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../AwesomeProject/assets/fonts/roboto-black.otf"),
  });
  return (<View style={styles.container}>
  <NavigationContainer>
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen name="Login" component={LoginScreen}/>
      <MainStack.Screen name="Registration" component={RegistrationScreens}/>
      {/* <LoginScreen/>
      <RegistrationScreens /> */}
      <StatusBar style="auto" />
   
    </MainStack.Navigator>
    </NavigationContainer>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
