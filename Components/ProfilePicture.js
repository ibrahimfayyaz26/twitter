import React from "react";
import { Image } from "react-native";

const ProfilePicture = ({ url, size }) => {
  return (
    <Image
      source={{ uri: url }}
      style={{
        width: size,
        height: size,
        borderRadius: size,
      }}
    />
  );
};

export default ProfilePicture;
