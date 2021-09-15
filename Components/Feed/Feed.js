import React from "react";
import { FlatList, View } from "react-native";
import data from "../../data/Tweet.json";
import Tweet from "../Tweet/MainTweet";

const Feed = () => {
  return (
    <View style={{ width: "100%" }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
    </View>
  );
};

export default Feed;
