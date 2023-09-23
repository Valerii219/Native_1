import 'react-native-gesture-handler';
import { StyleSheet,  View } from "react-native";
import LoginScreen from './Screens/LoginScreen';
import  {createStackNavigator}  from '@react-navigation/stack';
import RegistrationScreens from "./Screens/RegistrationScreens";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
const MainStack = createStackNavigator();
export default function App() {
 
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/roboto-black.otf"),
  });
  return (
  <NavigationContainer>
    <MainStack.Navigator initialRouteName="Registration">
      <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="Registration" component={RegistrationScreens} options={{ headerShown: false }}/>
    </MainStack.Navigator>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

