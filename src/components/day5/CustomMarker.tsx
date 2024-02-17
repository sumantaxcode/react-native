import { View, Text } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

type MarkerType = {
  appartment: any;
  onPress: () => void;
};
const CustomMarker = ({ appartment, onPress }: MarkerType) => {
  return (
    <Marker
      coordinate={{
        latitude: appartment.latitude,
        longitude: appartment.longitude,
      }}
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 2,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 20,
          paddingHorizontal: 5,
          // width: 25,
        }}
      >
        <Text style={{ fontFamily: "InterBold" }}>$ {appartment.price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
