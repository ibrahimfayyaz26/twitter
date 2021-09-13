import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainTweet from "../../Components/Tweet/MainTweet";
import tweet from "../../data/Tweet";

const Home = () => {
  return (
    <View style={styles.container}>
      <MainTweet tweet={tweet[0]} />
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
