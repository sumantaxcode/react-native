import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import ForecastItem from "@/components/day8/ForecastItem";
import { Stack } from "expo-router";
import LottieView from "lottie-react-native";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_KEY;
const BG_IMG =
  "https://images.unsplash.com/photo-1707870771435-50d769227de9?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};
type Weather = {
  name: string;
  main: MainWeather;
  weather: [
    {
      id: string;
      main: string;
      description: string;
      icon: string;
    }
  ];
};

export type ForecastWeather = {
  main: MainWeather;
  dt: number;
};
const WeatherScreen = () => {
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  const [weather, setWeather] = useState<Weather>();
  const [forecast, setForecast] = useState<ForecastWeather[]>();

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

    // console.log(JSON.stringify(data, null, 2));
  };
  const fetchForecast = async () => {
    // https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=390ff686d945c36b69ba7af0a4896b0c
    if (!location) {
      return;
    }
    const result = await fetch(
      `${BASE_URL}/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}&units=metric`
    );
    const data = await result.json();
    setForecast(data.list);

    console.log(JSON.stringify(data, null, 2));
  };

  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, []);

  if (!weather) {
    return <ActivityIndicator />;
  }
  return (
    <ImageBackground source={{ uri: BG_IMG }} style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        source={
          weather.weather[0].main == "Rain"
            ? require("@assets/lottie/rainy.json")
            : require("@assets/lottie/sunny.json")
        }
        style={{ width: 200, aspectRatio: 1 }}
        loop
        autoPlay
      />

      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.location}>{weather.name}</Text>
        <Text style={styles.temp}>{weather?.main?.temp}°</Text>
      </View>
      <FlatList
        horizontal
        data={forecast}
        contentContainerStyle={{
          gap: 10,
          padding: 10,
        }}
        style={{
          flexGrow: 0,
          height: 150,
          marginBottom: 40,
        }}
        renderItem={({ item }) => <ForecastItem forecast={item} />}
      />
    </ImageBackground>
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
    color: "white",
  },
  temp: {
    fontFamily: "InterBold",
    fontSize: 70,
    color: "#FEFEFE",
  },
});
