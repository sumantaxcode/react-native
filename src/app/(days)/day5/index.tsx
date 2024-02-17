import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/core/MarkdownDisplay";

const description = `
# AirBNB Maps
`
const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 5: Maps" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={"/day5/airbnb"} asChild>
        <Button title="Go to AirBNB Map" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
