import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTab from "./MainTab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewTweet from "../Screens/Home/NewTweet";

const stack = createNativeStackNavigator();

const MainNavigation = () => {
  const RootStack = () => {
    return (
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="root" component={MainTab} />
        <stack.Screen name="newTweet" component={NewTweet} />
      </stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
