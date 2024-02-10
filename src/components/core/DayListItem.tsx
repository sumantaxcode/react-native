import { View, Text, StyleSheet } from "react-native";
import React from "react";

type DayListItem = {
  day: number;
};
const DayListItem = ({ day }: DayListItem) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
};

export default DayListItem;
const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",
    // width: 300,
    // height: 300,
    flex: 1,
    aspectRatio: 1,

    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
  },
});
