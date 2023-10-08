import 'react-native-gesture-handler';
import {  StyleSheet } from "react-native";
import LoginScreen from './Screens/LoginScreen';
import  {createStackNavigator}  from '@react-navigation/stack';
import RegistrationScreens from "./Screens/RegistrationScreens";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
// import CommentsScreen from "./Screens/CommentsScreen";
// import MapScreen from "./Screens/MapScreen";
import Home from "./Screens/Home";


const MainStack = createStackNavigator();
export default function App() {
 
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/roboto-black.otf"),
  });
  return (
  <NavigationContainer>
    <MainStack.Navigator initialRouteName="LoginScreen">
      <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="Registration" component={RegistrationScreens} options={{ headerShown: false }}/>
      {/* <MainStack.Screen name="CommentsScreen" component={CommentsScreen}  />
      <MainStack.Screen name="MapScreen" component={MapScreen} /> */}
      <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }}  />

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

