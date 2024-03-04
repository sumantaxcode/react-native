import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ForecastWeather } from "@/app/(days)/day8/weather";
import dayjs from "dayjs";
const ForecastItem = ({ forecast }: { forecast: ForecastWeather }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>{Math.round(forecast.main.temp)}°</Text>
      <Text style={styles.date}>
        {dayjs(forecast.dt * 1000).format("ddd h A")}
      </Text>
    </View>
  );
};

export default ForecastItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "ghostwhite",
    padding: 10,
    aspectRatio: 9 / 16,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontFamily: "InterBold",
    fontSize: 25,
    color: "gray",
  },
  date: {
    fontFamily: "InterSemi",
    color: "gray",
    fontSize: 16,
  },
});
