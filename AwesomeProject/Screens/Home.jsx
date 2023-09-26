import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";

function PostsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>PostsScreen!</Text>
    </View>
  );
}


const Tabs = createBottomTabNavigator();

const Home = () => {
    const navigation = useNavigation();
    
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "PostsScreen") {
          iconName = focused
            ? "ios-grid-outline"
            : "ios-information-circle-outline";
        } else if (route.name === "ProfileScreen") {
          iconName = focused ? "ios-list-box" : "ios-list";
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >


      <Tabs.Screen name="PostsScreen" component={PostsScreen} options={{headerTitle:"Публікації", title:"PostsScreen", headerTitleAlign: "center", headerRight: () => (
        <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
        <Ionicons name="log-out-outline" size={24} color="#bdbdbd" />
      </TouchableOpacity>
             
            ),
             tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-grid-outline" size={size} color={color} />
            ), 
            tabBarLabel:"",}}/>



       <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("PostsScreen")}>
              <Ionicons name="arrow-back-outline" size={24} color="#212121" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ size }) => (
            <View style={styles.forIcon}>
              <Ionicons name="ios-add" size={size} color="white" />
            </View>
          ),
          tabBarLabel: "",
          tabBarVisible: false, // Приховує таб-бар на цьому екрані
        })}
      />



      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} 
      options={{headerShown: false , tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" size={size} color={color} />
          ) ,tabBarLabel:"",}}
       />
      {/* <MainStack.Screen name="ProfileScreen" component={ProfileScreen}  /> */}
      {/* <MainStack.Screen name="CreatePostsScreen" component={CreatePostsScreen}  /> */}
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  forIcon:{
    flex:1,
     alignItems: "center",
    justifyContent: "center",
    width:"17vw",
    height:"10vh",
    backgroundColor:"#FF6C00",
    borderRadius:20,

  }
});

export default Home;