import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";

const ProtectedScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontFamily: "Inter", fontSize: 20, marginBottom: 20 }}>
        More Protected Info
      </Text>
      <FontAwesome5 name="lock" size={75} color="gray" />
      <Link href={"day10/protected"}>Prev Page</Link>
    </View>
  );
};

export default ProtectedScreen;
