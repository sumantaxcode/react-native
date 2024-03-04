import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ForecastWeather } from "@/app/(days)/day8/weather";
import dayjs from "dayjs";
import { BlurView } from 'expo-blur';

const ForecastItem = ({ forecast }: { forecast: ForecastWeather }) => {
  return (
    <BlurView intensity={30} style={styles.container}>
      <Text style={styles.temp}>{Math.round(forecast.main.temp)}°</Text>
      <Text style={styles.date}>
        {dayjs(forecast.dt * 1000).format("ddd h A")}
      </Text>
    </BlurView>
  );
};

export default ForecastItem;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "ghostwhite",
    padding: 10,
    aspectRatio: 3 / 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow:'hidden',
    borderColor:'gainsboro',
    borderWidth:StyleSheet.hairlineWidth
  },
  temp: {
    fontFamily: "InterBold",
    fontSize: 25,
    color: "white",
    marginVertical:10
  },
  date: {
    fontFamily: "InterSemi",
    color: "white",
    fontSize: 16,
  },
});
