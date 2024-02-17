import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";

type AppartmentListItem = {
  appointment: any;
  containerStyle?: ViewStyle;
  changeLatLong: Function;
};
const AppartmentListItem = ({
  appointment,
  containerStyle = {},
  changeLatLong,
}: AppartmentListItem) => {
  return (
    <Pressable
      style={[styles.card, containerStyle]}
      onPress={() => changeLatLong(appointment.latitude, appointment.longitude)}
    >
      <Image source={{ uri: appointment.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{appointment.title}</Text>
        <Text style={styles.description}>Stay at this</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>$ {appointment.price}</Text>
          <Text style={styles.price}>
            ★ {appointment.rating} ({appointment.numberOfStars})
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default AppartmentListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    // position: "absolute",
    // bottom: 50,
    // left: 10,
    // right: 10,

    padding: 10,
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  price: {
    fontFamily: "InterBold",
  },
  description: {
    color: "gray",
  },
  title: {
    fontFamily: "InterBold",
    marginBottom: 10,
    // fontSize:16
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
});
