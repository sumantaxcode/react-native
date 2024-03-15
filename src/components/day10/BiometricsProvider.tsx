import { Alert, StyleSheet, Text, View } from "react-native";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { authenticateAsync } from "expo-local-authentication";
import * as LocalAuthentication from "expo-local-authentication";

type BiometricsContextType = {
  isUnlocked: boolean;
  authenticate: () => Promise<void>;
};
const BiometricsContext = createContext<BiometricsContextType>({
  isUnlocked: false,
  authenticate: async () => {},
});
const BiometricsProvider = ({ children }: PropsWithChildren) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const authenticate = async () => {
    const hardware = LocalAuthentication.hasHardwareAsync();
    if (!hardware) {
      Alert.alert("Not supported");
    }
    const res = await authenticateAsync();
    console.log(res);
    if (res.success) {
      setIsUnlocked(true);
    }
  };
  return (
    <BiometricsContext.Provider value={{ isUnlocked, authenticate }}>
      {children}
    </BiometricsContext.Provider>
  );
};

export default BiometricsProvider;

export const useBiometrics = () => useContext(BiometricsContext);

const styles = StyleSheet.create({});
