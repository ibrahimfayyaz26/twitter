import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTab from "./MainTab";

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};

export default MainNavigation;
