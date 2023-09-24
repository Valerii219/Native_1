import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
// import ProfileScreen from "./ProfileScreen";
// import CreatePostsScreen from "./CreatePostsScreen";

function PostsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>PostsScreen!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfileScreen!</Text>
    </View>
  );
}
function CreatePostsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile!</Text>
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

          if (route.name === "ProfileScreen") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="PostsScreen" component={PostsScreen} options={{headerTitle:"Публікації",  headerTitleAlign: "center", headerRight: () => (
        <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
        <Ionicons name="log-out-outline" size={24} color="black" />
      </TouchableOpacity>
             
            ),}}/>
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen}  />
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
});

export default Home;