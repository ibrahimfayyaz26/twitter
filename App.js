// import { StatusBar } from 'expo-status-bar';
import Main from "./Navigation/MainNavigation";
import React from "react";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";

Amplify.configure(config);

export default function App() {
  return <Main />;
}
