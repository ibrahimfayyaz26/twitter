import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, EvilIcons } from "@expo/vector-icons";
import { colors } from "../Constants/colors";
import ProfilePicture from "../Components/ProfilePicture";

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
            <AntDesign name="twitter" size={24} color={colors.main} />
          ),
          headerTitleAlign: "center",
          headerRight: () => <EvilIcons name="star" size={26} color="black" />,
          headerLeft: () => (
            <ProfilePicture
              url="https://instagram.fskt1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/206124850_511067303350225_6497963097778840513_n.jpg?_nc_ht=instagram.fskt1-1.fna.fbcdn.net&_nc_ohc=AV3A_FxJFUYAX8jJlm9&edm=ABfd0MgBAAAA&ccb=7-4&oh=a1010b1d4707b0250e21c762974fde29&oe=6145BAC0&_nc_sid=7bff83"
              size={35}
            />
          ),
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
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="notificationsTab"
        component={NotificationsStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="searchTab"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="mailTab"
        component={MailStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="mail" size={24} color={color} />
          ),
        }}
      />
    </tab.Navigator>
  );
};

export default MainTab;
