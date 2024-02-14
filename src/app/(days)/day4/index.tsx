import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/core/MarkdownDisplay";

const description = `
# Lottie

Animated Splash Screen
`
const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4: Lottie" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={"/day4/animation"} asChild>
        <Button title="Go to animation" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
