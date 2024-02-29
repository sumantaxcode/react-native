import { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  FlatList,
  Text,
  Pressable,
} from "react-native";
import { Audio } from "expo-av";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function MemosScreen() {
  const [recording, setRecording] = useState();
  const [memos, setMemos] = useState<string[]>([]);
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  async function startRecording() {
    try {
      if (permissionResponse.status !== "granted") {
        console.log("Requesting permission..");
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    if (uri) {
      setMemos((prev) => [uri, ...prev]);
    }
    console.log("Recording stopped and stored at", uri);
  }

  const animatedRedCircle = useAnimatedStyle(() => ({
    width: withTiming(recording ? "70%" : "100%"),
    borderRadius: withTiming(recording ? 5 : 50),
  }));

  return (
    <View style={styles.container}>
      <FlatList data={memos} renderItem={({ item }) => <Text>{item}</Text>} />

      <View style={styles.footer}>
        <Pressable
          style={styles.recordButton}
          onPress={recording ? stopRecording : startRecording}
        >
          <Animated.View style={[styles.redCircle, animatedRedCircle]} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  footer: {
    backgroundColor: "white",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  recordButton: {
    borderColor: "gray",
    borderWidth: 3,
    padding: 3,
    borderRadius: 100,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  redCircle: {
    backgroundColor: "orangered",
    borderRadius: 100,
    aspectRatio: 1,
  },
});
