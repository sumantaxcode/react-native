import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/core/MarkdownDisplay";

const description = `
# Voice Memos
Work with Microphone and audio playback
`;
const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 7: Voice memos" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={"/day7/memos"} asChild>
        <Button title="Go to memos" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
