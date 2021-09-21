// import { StatusBar } from 'expo-status-bar';
import Main from "./Navigation/MainNavigation";
import React from "react";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import config from "./src/aws-exports";

Amplify.configure(config);

function App() {
  return <Main />;
}

export default withAuthenticator(App);
