import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
// import LoginScreen from './Screens/LoginScreen';
import RegistrationScreens from './Screens/RegistrationScreens';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <LoginScreen/> */}
      <RegistrationScreens/>
      <StatusBar style="auto" />
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
