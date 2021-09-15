import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Feed from "../../Components/Feed/Feed";
import NewTweet from "../../Components/NewTweet/NewTweet";

const Home = () => {
  return (
    <View style={styles.container}>
      <Feed />
      <NewTweet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Home;
