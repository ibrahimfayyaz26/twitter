import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { colors } from "../../Constants/colors";
import { EvilIcons } from "@expo/vector-icons";
import ProfilePicture from "../../Components/ProfilePicture";

const NewTweet = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <EvilIcons
          name="close"
          size={28}
          color={colors.main}
          onPress={() => props.navigation.goBack()}
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweet}>
        <ProfilePicture
          url={
            "https://instagram.fskt1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/206124850_511067303350225_6497963097778840513_n.jpg?_nc_ht=instagram.fskt1-1.fna.fbcdn.net&_nc_ohc=AV3A_FxJFUYAX8jJlm9&edm=ABfd0MgBAAAA&ccb=7-4&oh=a1010b1d4707b0250e21c762974fde29&oe=6145BAC0&_nc_sid=7bff83"
          }
          size={50}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.tweetInput}
            placeholder="Whats in your mind?"
            multiline={true}
            numberOfLines={3}
          />

          <TextInput style={styles.tweetInput} placeholder="Image Url" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewTweet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
    paddingTop: 25,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  button: {
    backgroundColor: colors.main,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  newTweet: {
    flexDirection: "row",
    padding: 15,
  },
  inputContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    height: 50,
    maxHeight: 300,
    fontSize: 18,
  },
});
