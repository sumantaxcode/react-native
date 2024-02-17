import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/core/MarkdownDisplay";

const description = `
# Tinder Swipe Animation
`;
const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 6: Tinder animation" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={"/day6/tinder"} asChild>
        <Button title="Go to Tinder" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
