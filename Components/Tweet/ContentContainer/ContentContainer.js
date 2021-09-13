import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import Footer from "../Footer/Footer";

const ContentContainer = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.userName}>@{tweet.user.userName}</Text>
          <Text style={styles.date}>15s</Text>
        </View>
        <Entypo name="chevron-down" size={22} color="grey" />
      </View>
      <View>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
      {tweet.image && (
        <Image source={{ uri: tweet.image }} style={styles.image} />
      )}
      <Footer tweet={tweet} />
    </View>
  );
};

export default ContentContainer;
