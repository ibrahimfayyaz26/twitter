import React from "react";
import { View, Text } from "react-native";
import ProfilePicture from "../../ProfilePicture";

const ImageContainer = ({ user }) => {
  return (
    <View>
      <ProfilePicture url={user.image} size={60} />
    </View>
  );
};

export default ImageContainer;
