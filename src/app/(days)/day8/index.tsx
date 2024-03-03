import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/core/MarkdownDisplay";

const description = `
# Weather app
fetch weather data and display it`;
const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 8: Weather app" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={"/day8/weather"} asChild>
        <Button title="Go to weather" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
