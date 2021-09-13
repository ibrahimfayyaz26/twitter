import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ContentContainer from "./ContentContainer/ContentContainer";
import ImageContainer from "./ImageContainer/ImageContainer";

const MainTweet = ({ tweet }) => {
  //   console.log(tweet);
  return (
    <View style={styles.container}>
      <ImageContainer user={tweet.user} />
      <ContentContainer tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "grey",
  },
});

export default MainTweet;
