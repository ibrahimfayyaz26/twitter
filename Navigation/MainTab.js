import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { colors } from "../Constants/colors";

//Screens
import Home from "../Screens/Home/Home";
import Notifications from "../Screens/Notifications/Notifications";
import Search from "../Screens/Search/Search";
import Mail from "../Screens/Mail/Mail";

const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="home"
        component={Home}
        options={{
          headerTitle: () => (
            <AntDesign name="twitter" size={32} color={colors.main} />
          ),
          headerTitleAlign: "center",
        }}
      />
    </stack.Navigator>
  );
};

const NotificationsStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="notification" component={Notifications} />
    </stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="search" component={Search} />
    </stack.Navigator>
  );
};
const MailStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="mail" component={Mail} />
    </stack.Navigator>
  );
};

const MainTab = () => {
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: "black",
      }}
    >
      <tab.Screen
        name="homeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={32} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="notificationsTab"
        component={NotificationsStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={32} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="searchTab"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={32} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="mailTab"
        component={MailStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="mail" size={32} color={color} />
          ),
        }}
      />
    </tab.Navigator>
  );
};

export default MainTab;
