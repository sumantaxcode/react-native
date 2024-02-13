import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/core/MarkdownDisplay";

const description = `
# Markdown

Integrate Markdown content in **React Native** 
`
const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={"/day3/editor"} asChild>
        <Button title="Go to Editor" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
