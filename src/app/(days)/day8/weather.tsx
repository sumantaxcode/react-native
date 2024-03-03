import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_KEY;

type Weather = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
};
const WeatherScreen = () => {
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  const [weather, setWeather] = useState<Weather>();

  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("location", location);

      setLocation(location);
    })();
  }, []);

  const fetchWeather = async () => {
    if (!location) {
      return;
    }
    const result = await fetch(
      `${BASE_URL}/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}&units=metric`
    );
    const data = await result.json();
    setWeather(data);

    console.log(JSON.stringify(data, null, 2));
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{weather.name}</Text>
      <Text style={styles.temp}>{weather?.main?.temp}°</Text>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  location: {
    fontFamily: "InterSemi",
    fontSize: 30,
  },
  temp: {
    fontFamily: "InterBold",
    fontSize: 70,
    color: "gray",
  },
});
