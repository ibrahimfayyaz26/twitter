import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const NewTweet = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.main}
      onPress={() => navigation.navigate("newTweet")}
    >
      <MaterialCommunityIcons name="feather" size={28} color="white" />
    </TouchableOpacity>
  );
};

export default NewTweet;
