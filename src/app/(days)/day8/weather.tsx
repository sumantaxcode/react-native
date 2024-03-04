import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import ForecastItem from "@/components/day8/ForecastItem";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_KEY;

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

    // console.log(JSON.stringify(data, null, 2));
  };

  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, []);

  if (!weather) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
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
          height: 200,
          marginBottom: 40,
        }}
        renderItem={({ item }) => <ForecastItem forecast={item} />}
      />
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
