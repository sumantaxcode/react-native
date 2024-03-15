import { SplashScreen, Stack } from "expo-router";
import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { useEffect, useState } from "react";
import AnimatedSplashScreen from "@/components/day4/AnimatedSplashScreen";
import Animated, { FadeIn } from "react-native-reanimated";
import BiometricsProvider from "@/components/day10/BiometricsProvider";
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);
  if (!appReady || !splashAnimationFinished) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }
  return (
    <BiometricsProvider>
      <Animated.View style={{ flex: 1 }} entering={FadeIn}>
        <Stack screenOptions={{}}>
          <Stack.Screen name="index" options={{ title: "Startup" }} />
        </Stack>
      </Animated.View>
    </BiometricsProvider>
  );
}
