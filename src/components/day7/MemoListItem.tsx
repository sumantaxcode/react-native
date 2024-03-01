import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
const MemoListItem = ({ uri }: { uri: string }) => {
  const progress = 40;
  return (
    <View style={styles.container}>
      <FontAwesome5 name={"play"} size={24} color={"gray"} />
      <View style={styles.playbackContainer}>
        <View style={styles.playbackBackground} />
        <View style={[styles.playBackIndicator, { left: `${progress}%` }]} />
      </View>
    </View>
  );
};

export default MemoListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    gap: 15,

    //for shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  playbackContainer: {
    flex: 1,
    height: 30,
    justifyContent: "center",
  },
  playbackBackground: {
    height: 3,
    backgroundColor: "gainsboro",
  },
  playBackIndicator: {
    width: 20,
    aspectRatio: 2,
    borderRadius: 10,
    backgroundColor: "royalblue",
    position: "absolute",
  },
});
