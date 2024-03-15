import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/core/MarkdownDisplay";

const description = `
# Biometrics
Use FaceID and Fingerprint to unlock the next screen`;
const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 10: Biometrics" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={"/day10/protected"} asChild>
        <Button title="Go to Protected Screen" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
